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
    "2uQHWjcGQ6ehYDzWHYTAUGg9sV9mmb5CBSerki2mo9tVF32NVtR5qFxvHCtH5j7wQyifSDdrx3v3uFg5ibPozsLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b7CrMnrAjhQ9EVQobRhqL9qVauSehGd6D1rRDwABk6frowq2tkEJDtgKLU4pDKBgaPEYTnD2TTQjhLd1xCvLB8E",
  "key1": "3mZAWMBAW8czV2Zeown28JV4NrZN2LaE5vg6Y8C5nkB6bh7AdqDR3Dd5rijFuNTRYHLdiiR19nR252zxPDgmGbsJ",
  "key2": "96gSvbGMQVpNi8qP21k2kaYoWLLmCnwGGvw2P6jG6HuAkmBYvcD5y8FKZWwEBmYD7B4P7fnhW3oW1ZSJfkxA8Mf",
  "key3": "5kzhHb6WDoL1ztw3Bx3SqZXWaEua85q8aDpUs8aWxXcGUeuuBicEEoP2wz8GCiZbvsUwsVvXfDN7iMCjVn5XTfAL",
  "key4": "4mK6fpvJ3ACn68eeEv8K7BobU3TuNQhvBHYyUvJihVdR8VAdbBJkZT2uknFAd5vJnW8PWca89GvYNhMR7hbSJuzi",
  "key5": "4bFNY5GKCU3N1CdikAXYM5buuGukpngzxSCUzMtKXfGMUjfpmGuX5FCyS9QSJ4fvmLyEuB4p2mZTzGPN8Dz7X8Vv",
  "key6": "4C26K3HwdLTLsjwBZvg7Pfirn9aoZPPWvq8P4XpsLXU7LEfAq7BRm7eLbRApouBQyxPvAZgXfZeXrPVGh7Z2oGBX",
  "key7": "ih8PbeMq3nthPpSZohvCwUZYo4WHizwSVMBLkLJMhVje2HGyxpdwn5nxkaaeRGjrHyRD43RFFshnebxKEHAgopc",
  "key8": "2kqCobq6MSedhCX9CZoqAvQgWgi7Av4bu66HM1qryPCz8Y8AFkXbW7yU1gfyaxD8T9r4UECcmSXB5tuBekMtNSYJ",
  "key9": "H99QUW965jojZ24WdkMybfE5bQLz5iLEpfS1ShLReUsuTeAkFsmbFctQq7KA4iqy9pEVH9dAKEF2obHuJ3G3qZT",
  "key10": "3bJSdZuVjwiFwd9PHkdjAMeuJ1cbZC96WEQeASfXLr2JRuZ2bJDuTHYFDTYpsErXo5A2853Ctgw8r2e9h8FxPoih",
  "key11": "w68sLsQukpL4Cza5VpAFxjpLK4HnTzcW5s4KYiProBKGJNphx9pu4K33pCwcXdfifBPPoMriPR319k6dMsm69as",
  "key12": "R8hyEvZweU2oHwJDyH8u4bLxjmb9dxnwLvP7Ca9aKN5rdgq9wLAdrfDBeZEcP2fu9je5MEv3ZzAvsxtVnUWPzMV",
  "key13": "25TBJC75b4QzDLF5UVSkYfJviAU8SkFTST8u7tDvQdDuuDj146oFjSHLVCdgtK7JYJvamiQy87RBxdCiYeNfDVyf",
  "key14": "5zQcqi5mwcycfSgfxynoGCihpVvVVpPhDr3iFSG6mBQZ3Qj4rwdzLYT9S1T2856rodbJZBCyW8xjy2bXbpuvSD5T",
  "key15": "4mgpmFCbsXoov9ZhttYXAQYQhYVAzWLuj3GcS2cSECkHbxdh51M5ysYnd1syDCJ5B5zmQkyAWgKHwZYPYH9b63Mc",
  "key16": "8Gka7bwkCWq26nXjgNxH1yUKM1yaZzaeQqRt1vLVKpwkymyV9WrvWfhiBS4BsAmjCFwb6Cem7yJy8Ld1uBc59sg",
  "key17": "4B6M3aycEeSVGXcWcGw1pVMmB5w46ma7BBhsct15DaXq2qxGia2ZS46AGXCvJfo2nLjeoLg72AmiJnRSjFpSk2RV",
  "key18": "3CNZyunUDKiXcYu3ehXf6muCWaobGMNPkqKa7dUkcYtNz26d6ont2tE6rVAv9j4fccW6gQhBXDY7TCFufADvZXnS",
  "key19": "53z1H2ENS9dNBmA5t9xJZFZJRQ855y9A1Mg9t2AZokGVSadREmSLp5CbZQFpxtDNgRXocFMnWH6ogSBsp3xDcPYn",
  "key20": "4r6oYZLyHsM2sT1RxBcwHFz2vavaVgNe1QD4bXTnQT3cqiFd3azvE8QJv79XjaxBqdCKsR4YpyxiNFK2MibDX9Ds",
  "key21": "Fax1debSrN954QeUvybHsu2UL3tfwSpkgVWK9UjnZA6G4VVSUarkw6xmY2YjRZyDTedwRM5qrKDdfkwajURBVxd",
  "key22": "399AVAPTFeGkifcCo833MY3inNpFDJWcPD19fH9sMAW9TTw4rPogPBcWQxWm7Ke3Ly8kW9BPLuDCu1RKEYdz9XLb",
  "key23": "5uEzWG6WWUJP4jPVz2qvK7u63N5cY9wtx27GH11813GgejdcM7JSE9mugQUHciACaQUxfvMWAiqFBxxouFW1h59b",
  "key24": "2ptEULsEMxGzipmqEApJiXtyBb1wgoDKRC3eJmunv2m18tzJim3gJGybNKPMCDpk2H4CKG997VuDe59rVSmgBgSc",
  "key25": "3eMFwccNLTJePeBL1LYAQCDWopks9E6gqzmjZfZxCGNayhC6oMNW6pU1idTJwZzcsNGoyptzuZbdcbTrdHitKY7S",
  "key26": "Kwa9AccZvGGkZUkAmg9SBDPpQLxCyJgG1pCL3KiMC666PcvXSqHgnxmCCFcTXzQWV7t5jgXC9BcqUear1SBFpCp",
  "key27": "2TJS8XndgcccpX6JNxW6zaccrGSjUrhsTTTgp5a1iwMSLWRHtbmGTxQ2nH95RrW6PT5LSfM5PDp94sMmDBNfunHL",
  "key28": "4bjgvjewskPfAg8woogrLGwUJJ5QBGYU6XCoV7wqZVqh2PnzFmsq5joSjDwSibE8EuuybLCFFP6FPiymXVzQvsPe",
  "key29": "2ft1BTBQUGH2r9X5SmjD4CqZ2CNXwWF8XZrQTRZdZ8TUDf3XJzVxpNvuuAUWTNt2L3aMuzXjkjKTb3V5roosSRnU",
  "key30": "5vY2Fbmvc2bsoxKC4YwrVveVJR1L2GKtJEE1tim4SUsUAvgnNfpDEjWwEcN3TkFLGLYnxqxKhr4Hu1Gw3xHfyx6w",
  "key31": "5ttr6op22AHgvmPSRTP5GrJtnhg4uXfMK34WXiLRQ3b2tMCkxWVVpg4ePXrX7i8ExsbSWXvstniwH8yrwNmGQkA5",
  "key32": "2b4BbuC5DQRnmYJ7tgDZv6gn2SYz9ytundSS8Wjp1bSv7xo5WjThnE8Li4d3ZRrGiQFzKFUEVpqfroEEdffXxiUr"
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
