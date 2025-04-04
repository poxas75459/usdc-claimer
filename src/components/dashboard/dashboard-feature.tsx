/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "52EmQkek64bJZR9HQ1yLqwmWDQ4EhW8WGHSozy2FmPqqni2AhsGrwkrrnZhcSZ4NqYtQMsdb4cSSnh7bYoxzYxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EFpEAADhvHbG19LT9nqshpuWCHbL1ETqbbp3zuf5XQhbWbTF8rcw9cEiMmVpyffzF5xDRVJ1f4gaCLP63kQHMoS",
  "key1": "5QwdzDGS9gzF4FfYXKYCYE3mBfnJpu8pctfbNJAjTYDgMBuavcLVBdJYDakoPwNdfkGi5QYH2VdmfFPv7mWVJkMd",
  "key2": "5BZfR4VoxrmeQesZAruHUuDnWnShFfeTj8QsCJV2Cy1wnR4pxzfN4NjzPtFvcxEM1D8gPcTPxcFe4Mh8qjMFib2W",
  "key3": "4pCvWLfnrWLU1Z8XMX6EwggAncUfpQsUdNcGwy7a6J6Cma4ncmCKLvaegQ9oEtygssh3QuJ1nWikdKcygQCzLAnM",
  "key4": "4ZenoAHrgxJ4JLKr7Eu1EtavLUPrVNuvYLbhzpBkTVVfYzv7QbAaanSwNCXJjP272a3LNmLC1EkpJtWDuMWNTzVH",
  "key5": "KRi5F285EtZNsh56RDVQETrqrwtMuLtXoHqD9RVMdFBBbtAoE63Q9zfEwimGqtbunpJxMSbmUZAw42FGybhJEhr",
  "key6": "2gZMGDUqBLDhvRmE3LKxpkR6CnFtSCxdWw79Ppjva7nthXYfGP6o1VM2PtHyyc5nFWMcg61VmAVkdUiHUTZKyXJK",
  "key7": "5ZYUYPJD2jBu46Pp7D2axHPJJucVdzfP9vPEbNS6DAZdY72qaF8zP5mgmXmALh5wrJFY5uySPhsxCZggG2ZHruCw",
  "key8": "43pf7cQ172LHdzmc2W2HXuiYMdEnXT99fvjf1B5ioLrcgjqKq25MYCtQz2rYjWBoqq6YxsnVXTQWNe2CfWqPci7d",
  "key9": "5u22ARLkG3AUnzb3MdMCvg19CGgDvmSyMhvSFC9T1rX27KnH4z5aUhik1r9YoMWiYZX13ZPye4y7mT3vTGvUowqa",
  "key10": "4yidwrzSggYx6cqtc6ZSWV5mtTYAzNAJWNSWKDGdkrCpV433UyyRqY3msPqhNq3sqHWnXKPT9K3QVqUHW4sj2VZe",
  "key11": "3miJxWkjNcn63yDAjhNEMh6V31C36xDDnvppQWww6g428hbARAJrW1bgkjkVdELtynhRH4wbGoJLydDEadA8vGns",
  "key12": "3uQACGw2JetKgsVRtSXEsHABVFZPHCfGMKkiaTezUYwimQyLSdp4Tr33CsYo8XodDZAp6DJb2U28rS6ozijYnFsa",
  "key13": "3o2v7cYzcbxQHjD13LqASToqQiEBcU1Pz8WoPSmLnRZY2yTUZsBRqPGd8Vgg3y12VfgSMYXT2jADFQQti1GNdTYN",
  "key14": "4eMH3rbKk4mxgbr4sRB8eLxPQXNGszDb2P6ysjkYjkvx9CKgNZEN415efmerZgEjsjJX22fTcmHawVc8CEKqPMah",
  "key15": "2buheZn4BNG9ig4JHRqvSNrmPRVxbG1RBtRbpHsChog1VYa3bpmKzF4PirTDmtWRrxJ8RcccEbpvAVyZwvhoFe9d",
  "key16": "5fTU44T5n9EitWWK8n78zPhQa1ATSGMtgSbpHWC21WiQ2PsxAuDVR13fvCzgVhhTuXDxWzHVkWzdZBbZ3YivVCvV",
  "key17": "oLwQtLnaAjWKUSkrWBurs1JLoo89iudhjJX6krCd3npWHyzk1y1jwpy5627tpEHU55KxHLfvpt68sP7JES22q21",
  "key18": "5SGFxWF8kFDRZAYvg58sAHY9eJi7aEuEoeM7NoPFEYN3t3nEPmskNa7r9Y9fibp4pBvAaVv8WxXt3QSd3HBj3qPM",
  "key19": "3fBQ8EBCZ6GAVmmaHjzjAcqXQqBg9fsCAJAGGrHLgvuZ79g3iEwS34Y8THikLZMqFSP3GHMDemsniz74NEbB6tem",
  "key20": "4Sy7o962s1kyza9gFcADfBcFxe38WLQzyf6Rq5wpNwZ9SDdyTMaDkm5WLjQBoTVUrHu6HP1Ei6HeEsyD3UWS8WRs",
  "key21": "39ac9h26bkvMpXU23eeUsRA4v6DAt8mSog1nmHFEKih5qeientLpTqAse2uBeKVQ23VPZiA6UYtkq2Nw9p1CJ1rx",
  "key22": "3NMdoYAGi8X9hGGoxxqFpU8YwZu68qRkx54wt3Qpy4btkVvfHiDxNokKwCyCghUW4k4Shir6DFxtTBq8gfkE3mF3",
  "key23": "5SCVntDLJFcjDTEKPxx4E2zNQfH8PGdHFKccBAdBgQWjjY8NAaFrPNFUwLAHw6n6KCJZfsaydU1fHuje1hAuaSZh",
  "key24": "2nMpue4MHDh3mf592NEmfN45avQFzLJRDptwT8pNm1aUhpyWuMDo5dfuPENTVuDeHwUWQmKvZEBUNVLGEKvbjxCF",
  "key25": "5tVLvrBVjoNTyTi9DJXXW3Soua4wXWJZRzpust3ntGbtZ3c9Lxr4kTDATQanHzNygo3T3iCPpXRumLEiKqbCzA32",
  "key26": "47wGqw8VAo8mSFcDi8fVENBz6J36j9zh3g412jxquM59esEh2vR4ubTxbT4oypij1S6ANnSe2Ww5dhGXghFAfN5Y",
  "key27": "5TFUQGF4JdHv8XypdVbBNmLFMLGEeQmdHDjjfAfzRvZD9oE7ME5wNcEMz7eTpnc2ufRXszdDcT5aZrPZWFQQVVJa",
  "key28": "Uh5QPRg6nEpRm3Z84qSBfWPPPx2M86t7gbLm6fMXEtQNRgHx8nMLRmX4oh6EfN2FCk9QJ9BqzjrYxEBUHottom1",
  "key29": "2pHUt1RnfunQcZdeg5Y4pwUujdZyPy5qhVM3cQzyT9j1HDqqHJTRorFusEF93aZndnq5UyTSsCZ4dYTD2fX7msJm",
  "key30": "xoXQxGnWTz7Sr3W6P1QQ1hbBhjtuvxxw9LgyZLCxTrZy16ziHahEqmhrubZpQbQf8R1RMBJaTkpnARaG3Aq3fpZ",
  "key31": "2pL2j97cjeaBSCssqYxVwqHLSt5Z23JtdLNmxsr1G4ZMHuZ7gaRECWqA4QqQ2CrGMk8cgUrqvMmCVEAkoBUUaCes",
  "key32": "4sZDGMyKJhwmtm6WfWqpYEXJ7W4qoj3idoybesVjMJVS536huuWsSbu1Bn9yWj14qh7XBzLCc7zvnY1dVF5GPPfy"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
