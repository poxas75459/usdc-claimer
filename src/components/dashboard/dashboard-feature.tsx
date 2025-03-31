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
    "53WNNGcqtxhVXVuAm7StsSazXDaucJeMjCe724YSUrS7DmmW3mcwJsMgdPYsG2NtiBSUiuKJ9aDtkDzcb3SYmeRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BzF1etWcw7fiyHXg9mpBrwYwEF2KwpJYNTSxTetPdKBQKVogE2gCZpwp3a9a4qYgcezZTT1cTQfeo7txCDY2the",
  "key1": "5oKe1TQCYMSckavo5SNACviJh6azqj15YMxRmSWrrsWAWntxbczuLXF6DkD9DLa7iZp6qFotiqnKuiT2XrrGunUj",
  "key2": "3m1JowcdAR9SqcZhU4Kp9LcExWsJ9dkobiade3T3WPjbTD4cXBKfhXNJnvyzZUeQwFhKeYNwLaB7K21DXqa5KGmi",
  "key3": "5KVJE4WW38yjzKTqJGSPfyXZ1S3sAT8J2gVUaqa8mcjNAFaS2VMzDCnprwwcRgcTX9GRGeSNvzvFCswin7STF52Z",
  "key4": "4W9ex94HBsgJZwPT8jTjRsBSZnyFSSbYjisYDLFgkgiVc4gF8EN4A1TP7aQvWKNowvdBNSofaxvZ7uw1K8uxmfDS",
  "key5": "4ctR9jaixhT7p6U1mPwEwuwPEEmZbDk2sBZ8HF3U813qCKkPA8oZTfv6B331vaThURtio6G99jXWMhqdpSQQmpbY",
  "key6": "676oZVnoDTpmGxShEtLLchF4jSF8wVArjDJQQBdapBMMghVoT81xdgaMiEuywt35j338Wf2pVZxWm78QFUSaj7Y",
  "key7": "3ezWP32CkxhXTXEPPeDuhRWHGH7n2CF7oyA9ZZBMHs8bjWYY4snBNFkaHzckhNExwzrbmMNkSvTqykge7ECwJFC5",
  "key8": "36tUbFBqjHJm5Y5VsRhL6vozUQiDt1mbqbBUurPppHhytFRggeAsnwweTKMPR2WVkxV7EZMnu6FetyGkcANrnhat",
  "key9": "G3ZrLvgfX7AiwbG1RuuqxJveJrSqjvLbffst3Z7JHjp1gA8L3xW6KNMoo8YNUL3ptGyjmroiHzRLxD6oXXbb8o6",
  "key10": "3t1EkosQvHVDA4kt8uYL4LBerLdtgephz77D1FKmjDJcqyv1LJU5kMZ9ePchv6C7oZ6Se878mn245S3wVNeYfoJC",
  "key11": "4AbXbYqd99LsENA15wnsZrow8jV8tQo6yhHfxhqnxJP8aT6M2cMAW159H1xxwhBbuEZCWwsxjb3jZ6NomvVPNF8Y",
  "key12": "5zxTtew4scpbwydU8MDTutbgxSsQqPJd8v39XUbkfVCqgHu9BfgBWA1fqm5rm2Mphy4mMa3gfaydQQY954tUofjK",
  "key13": "2ocCfoy9VHqGakAt4NWiTXkM1W66Hd4Rh26vghtugJVFkQM3STn5YymrpWiQW3HNvZXf3JJxSYZ8NL8kfHt3Rru4",
  "key14": "34z2XQQKUyUXzpUMhZn9BxaUfyTg7DPAc9KvFU4oZDjo1JTVUpLnjgeGQzbumJma3aVX95MV3vwcGHaQHzJBwkU",
  "key15": "8xE5xLKBr8J4gc7Ev3oBaxEA3fL63DBBNf4CTZyC5CCxhkdngCCMf1Y21Dw3cgmJw99czbiZ8qoLkiPk1WWYbzb",
  "key16": "2m7UjxWEFwDSk7BME5aj8ZmpaVuLFbZZ4AiqKRp622tnEe43qKgxGUqtcUM9ZVzcmd4a8QvzTXW7PESuCB11qQzu",
  "key17": "5uqyawDmtLRqH7a1ro3DsiMvkxsSbzrkKaRLaqhH7qGfbuP54kxBcn526bmFeZXFt8ZLW9zTnAgbmQELEypse5uA",
  "key18": "2MwSSjqbTtMLy81H1jsCvPqsA13Q1UpKmnDD2dD2zMY4Z816iw98qfctSke4gW4zdaXXNmxFaAs1BETzk9L99FQQ",
  "key19": "4Ww4eFd8WUhJWEc2i9w8PQK3wwkpQKgWd5T6jH2qdbvRtW1whA6tLK1H1yQTEyfg5dW9DTQFi5EB7oXhfhDELfJm",
  "key20": "2XYvgBBUU8maxvuMUFPPTmvVsiLia3EdrNZGvYDyjLcLFzpcbphKj1kc9c5rHkbD9341YNB9sotp1EzzEuDXNuva",
  "key21": "3BHfhFicZLCSpDMeNFpbyus87KnmzW3P5CxsqNmrpTYXm4arF3ciStCebQyKTJTUNpqBH2wbLGHQC5PPYwQEMB2W",
  "key22": "GqRPkTfGBXQc5h6wP8PrmXs6BU7EKE6Crz6D33XstW2buAYoBoCNc8n6EJpD1Sd6QMebmBQaPS3jPaEFVNcxt7Y",
  "key23": "ySAqF3zdiW7qvoHSE5Pcc2BAWr9AQQb1NgFvoYowPpgLrqUuSZP8X36tefv5xgVSdrXuA26fVEcXqjZvRV8jYDW",
  "key24": "4RiwE1m912RJhBUPZv5vpdeJKPvZBag3yozGsQgs2u4G1CZT8S5Dxdz6y2cT4QjvFRFzhpKHmVEc61eb3diiTY8W",
  "key25": "2mGzT91wUJpG4SKhYuMkjqWHjZonCGp3C9FdX4kSiCToU136BgoHGEkxUgwqHUzQqnsAxsmyhV7NJZynHfyAPscH",
  "key26": "4jgPGfbxLQwHxuiWwCBnuoRNJVQDERFKdHSvc4zk48HzMMVjMKyrWUrmSmNGHUY1Qr91Q49N7Kf1rDuE613MB3CP",
  "key27": "28LbxDQZ3t3Qpr9QXkYLnUYsbpkjTbHe1srZV7TED2Cc9KoeVAMMm837SkoC7rsu6sRDVuEUm3fPXUd6mz1Mm3Ls",
  "key28": "2Rh1rTVZeNAysCWNKY32n5zJqcDtoeyTfeSr93LcT9tJPU39hBABye38zcRMmJQLmLbZB1LGSxpgWgJk2zjnASUt",
  "key29": "58wjV9c21zp868k6MaSBFXiQbLawfcV9YBt7brzWp4FCurE4kEn4MH9eva7DtwmTfKpuWauwR9eNZHMrS6vsHqnv"
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
