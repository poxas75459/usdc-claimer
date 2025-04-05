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
    "5r3pHT4NaapEtTmyMG6joKF1zhmJ83x3g2doAvc2sjtMbj38dVLNR5gESj4shtkpWDPkT9bdMuJWAATSXP65BEm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PFnVuvenuYFxMUBiuRJH1aMQGuy4JBteEoAcRKf4E39FKtHhyz8sDBFXSNQMRwH7zNi9VxqMtkGXrY4oteLNy9r",
  "key1": "5oS5FbNvfijW32owcpFccs11HSodA9apt45ycPspoW18MSbHW1T24jVj4NQR4X3jHuNkf9ESJbYTAjjMTVp5mGrF",
  "key2": "5a5n3cbDLy1RZboMDjtMCXef2ugugG46KESHGi5jmQipojnquaa6cQrxrqYezumXDeBhqNRtLo9K3gW89Lb4niW8",
  "key3": "3V5Ya6Z7dqofZMQhh35M3CpPYaUvZuj6vEZ95Aif9QzCjKSkb4imkBenhnpvM4ugNrZkzxK7FjiP1m4yRpsbfqqg",
  "key4": "WaKoDYyVmtcT2RrPVnrBtUtTPean6Wj67tsF2rQQ4evCs3gMw5YQfFEmi2PjfJTAYGf1Nondfcbt9EBu23LxLa9",
  "key5": "Ue5RKDnYNGC95BUm9SWdWsNGjy4hyzusv3EUig2mfm4ZNd2zvLuumDkmfLpG9KnafSf7zziFEBce9AaNQgTgYAt",
  "key6": "4fTqvJmXq2HeiNsnsR4qKXUtgRQUZX6SqVVbfCaMLi8tbKJPmHxzzPpfn3YJMZgL31BEKtEUVhSGng7reepN7WTS",
  "key7": "2iZMUeaUm6qp42zXKuGpvAiHEJnw9nDPtXcESK31CDuwchESNnUj1eGHaHvCaGDC7FceNaVmew5boKuyE1pegwTi",
  "key8": "2jCoYPtJPYGT2agfU3xbcqRDz6cH4T5d4fXvpu9PxJK2VYHdmFtptvpfWFJjcQ68FuiZz1AfzQpPABeCiD9CFmMT",
  "key9": "2Kc7dP5awFo56aJwapW493ozDTPQRpz8aoKPEX4TUYi7iZwodCYFNqfsLwLFg5yxHpshRy6rFrjpi3qkk9wdKQf4",
  "key10": "4GL5kGudfi8Mta4zUCh28pXbt5RZvuWjjM7p2SNojiQy5KeAmkSgrd5VqxyBAAkFTwJkwbLPwvsZmsnK5voDgFCn",
  "key11": "5r2nqRKCdhVJZ5FoZBCRw25swDthFXTd7aCwXEwedag5iizZK4bKG3M2VWcB7RwA2evZZEZP7AvfoygA3foxSUsX",
  "key12": "5vMYT8J8u4DmcZsa53rQfioMboezhKN41xfZvTLtycnMp1jujaQ5i8BKUnWCGeG5zBDGS3xxF3qykELiPcv7pBcd",
  "key13": "41XHz5VJFEd8BkkxiYUKQnRDayCBQQFHcLk4GnVmN4BLHJLUbqGN6mHoEdnvvdw1NFYjqqy8ftzdbVrpG6ZzbSc8",
  "key14": "32dqpU3qJP1LFR949WUAC3q6x7RFanpypAy5GQWixJ1QA2exkN31kZjuNycgAi2TgLYYihfYxFKyD2YvQ1QmdKSg",
  "key15": "5uUn1bTFCswmqM3HdCN2q6dhXaEjs8ADCrsdk2VDpwaXBEafsV5cpJ6E6Z9BD9CtCW1A1M3aFejDMAGc1CUEkT1x",
  "key16": "2UA19fi3U84DRN2DSQ14ZKWrjHCuquaYK5fXPqTPE5vQwvWv9MJRL7gD3rCfNGiPXyr7WeFqqb3z3BMAjZAfdDCo",
  "key17": "4y9VyRSgkygYeahgw3hg9VSjefvn3Sv4m7TgXXwCP3Bs2qNyaZqrC7TVqd92eLPJYU7AmFgNscLAQ7QBQUSeTGov",
  "key18": "4G2LRPyHuxVNxzKqdVjw2VMekXe9ePQXMzuG8uiPgfZmGEGmADuyACCcPXnCivKGdbCVvt9Bdf5Mhxsew779bHCn",
  "key19": "29TUSvZJaTDCcS6Dxg65z2XyUzmdi1SLN7ykRH7bkV5Civw77WyqsDsmLr9NDGiamH5e1T59KtX8apbfhNtVUdZd",
  "key20": "5hHD9HPiJDm9mFMveh6EMTR3cKRG6APqN3RY5wNw2fvJAeRbQm9DMFvo5N3iqTQ5UbGTpQFa4QKm5DeYTABzZYxA",
  "key21": "56sY6CqktFvNQ5hGPf8rZunoLZq3o85C2Xx5dSEhhmDR5vQdw4eLvacU7qJtDAfmaNUAAgvDZWLUP2nayBJ8yiJX",
  "key22": "4RNVHCv6MqFsYQsXf2m9mZ33gDAPhE7pRXhGRRphyV5tHvfUD3Z4iVyHskg5MdR47PkPL33BnJU7Dm3y6VnC6sgu",
  "key23": "4yaj4sniifk8darzVUXxaqJKvzcJDVCxVrNnGR92a8GbH9U38HxvTEpZAEBYzzjGjMjhFfmr8ESHNehPhgpipvtB",
  "key24": "2YAGEDQhC6PwGHwUJ1jZcqy25aKmBiqcaJawGSBU1xNzfFEbC3b1g6TKZWHskcxERxaAY9YoNbThR5cN3UsxTZZM",
  "key25": "5QVzWcnmXWASoGdYD1ACDwKUq4jiAZyap6uuCZ133wZj7KYiBnJnmi9KcUe2vZMEebKAhLqT1468vcAGdYd384Za",
  "key26": "3RCSBeMK3dtkZmyJwn2yh3sD94KAf7Yqa2DYDSzFsesXgFLbV3XYQsqfeS2wVQeVyUbhvgjfDAQPcJm8b5DgaW67",
  "key27": "3XvUHpkitvbxwbMoyxQAYicPdLARQw42fno7kDHKbsafrPB9ZFLLf36QEFtmaCPP22inveEEzahBTcvqPDc2JsgN",
  "key28": "NxpGrTiffusyiefzrCDL4hVpGE5GgSemJ9XQoDvMPFYzzzxoa2VSNC2GF9iDE7CX34zJC3sBvYBMvUddu8kuEd1"
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
