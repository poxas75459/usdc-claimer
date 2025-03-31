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
    "5AzE3ppgzugWWR983xeAtxwdwwZ1aU8Kayqc31FdcgfxXEqVzCMNM2F3gobmSQSW3ScnA3ZCKVFhVWA824uKLtDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dU9pYwGTXC6PQ4KFsAqriAB2WzBAwMWxNytrxxX4wr6LqtQcDE9Er3aZGWtoXyKDutzM4nEZw6Eujj9g8b5hBCr",
  "key1": "PaTFr5pCt3ibF4eUBAamRzcqUfbZcNcryJ9xiREC63Qje9j6TjRU4a6w2r74A5U1mcJeRZX9SAh3XxvYJw7vR4M",
  "key2": "5oDP2BXyzTYNaAmFksRMb7Nb93kqTjaKp4YofNkTG5divfCRtcMNRCnriv4S2TXHoZfsRJNr128xt3jMoJopZNsE",
  "key3": "5pGtFGGQwt5Avjn3E25gtpHjwjuEnQd6zcMPrVzqbhuHU77QWb4Hm7CBWPv1ZSS49sbYBAx1jxb65FzQwz8iGGmV",
  "key4": "3no6NA7D94dKXYd57EJXN31QhLVHMMDbHQb9fGJrh9vjH5NiiNGohmjKnAuXiVXYKVCt7cYQj2GwCDEHNzsgdC9j",
  "key5": "2y7FYAtg5Wkk4F2xHWekBQRCM4rbLG1BWWFb2CneKRdesorx6fJn6ZiqxR8FESNhQ7f4gbMipAcp9BJMVpYTJN3A",
  "key6": "61DTJhMyoK8NSebPX4qc2cwZetMgH9AgRKXX3367pnVXBeVZN7Rjc9hDiiFziMKreeomuBWFD2odUe4nsen5Ri6N",
  "key7": "2ceTKATt6Hfwr4f9tSUvEGpKW2hpFnz1hoKLXh9csNZmF2ofPTKwHTEnUjPw3FttDi5gg62dRiWeBrMLQx7cEDTt",
  "key8": "AbQfJhmfyrAh5fN1ygoCM9M4bt1BDjZupsfmNGBu5E7ph5pTsA9qt1SN22tC9cp1QZAfCLyAMnu69ivyhdH2f5e",
  "key9": "4cHee9gHkKp27bjRiNzYj4Y5E9Ug9UCQXWS55SMJzr3Xf89SxiwF5tWGQSMX2HhZtW9jxm3AMnCkZYjmcURsAKU2",
  "key10": "5TuEdtgrM8dHvGB9bZEtkpAfaJqbnXVVLDABKheMmrtu6VcF6hjLJ2QrENnVLrG8dSahuudghWWf7maLWtp2R6Z2",
  "key11": "61e9VbmBaPYVkfZHPaSSGCAFgPTHBDxthZbkfB3Sq2b4AYDC5LF43LBk4eaDPALALvfBE8Lcapcpi55givnsgok4",
  "key12": "5kzp94KwxNqXwth7bRu8QFhx3ekm8FNdGqwWPHJP8Pdimzzrq3aasyb6ZVSt3RWJLuL3QFrQgPYmq6f5fqQumaxi",
  "key13": "2dgpC3jEMNEAqTvTx3idM1VnXaHr3FN1y82UsrbzUGiFteEh1ftTLSUezk9MBW7pguXsC2NeTbizCT82qi87CwFS",
  "key14": "2185xgcx63UWcw2NFpDWUtA3dRd9K62xiztoL2qWBhSBmA2scD4mM7hNEYoZBhNg28h6GgSjDx31SXWgrFnDKKJs",
  "key15": "3KvribnRaQ3bcQP1ZZ9TQoXm6kNHvSqwLa8cq5K9TQntSbiomywAuhDHC7hNfyN241odZNmucukcnw3DU4V9T45Z",
  "key16": "4NQQdEd27ANsgQ7thSnEATgK7Xr4eYvzzs9sRVU2kqmUjyMZmphBJLFqwor2GWTEXswURu5fToKLYvB4Wyt3JxiA",
  "key17": "4JivVpC5SiEm4wkgtmeqqVVKpTVg2xc8Y7pYDsr5KQx4Fu1oNzuFYPmjNQbMHz3S5zc3isFotCsu7U7Vsc7kmddo",
  "key18": "5bcZKaNbbDxt5SF2GPgrj95vupznXPM99oeF7ay8frP2KvExodDdddQ3ogGJ66cRRPVEcZzdgWyX858MhkQZByhB",
  "key19": "39TpPPuwbxrpsVEHRTvHgTdnLeE3umR9GZPP14kDU4pzwVo59MgeWK4pjqBqVVnJgupF2MNofc1j9kHLDgxeZ3Xa",
  "key20": "2KkV4ar2aYYZWLusVA2du8QBS8sg9Jjc9XPtWLePTb73RGoUW2MKy36NvLTTw5H3zDXNMMmxa9gdQzYj2sU4vPyp",
  "key21": "8QKRQ5G1FirHPxzjSiNuf5Quf3FHEUcUi8Pu9BpTVh3HiczjYgouZAUtthhKDdPGhmC5GjZh1zt1tKicXtsp3gt",
  "key22": "65qnCoChWgn3m84bZfGvCdk6rqiRJ4pMH8PsKUqDngacjCzYn8T9rE2pdsv3c4j9zHbMr9ia3D2YaT5WuXgjUk1p",
  "key23": "2StPE32V82LHK7PbDXc3S6zHKUvbheLDoAt5RK8Gj1tHZBYWpK2bCLJFKttKjWnZs31TMvaj2URG62AcRy6JkUdb",
  "key24": "5aYtJDYFjw4ENpstCFJZULN6b7XuETzqX7kAJvVthTMYBXSvZHFHvLzvkUQGvU85ea9gwrsX37dBpqjb9zSciYhP",
  "key25": "5YRyNKweHyaEDtFdB4aqvHRwCM1Gx3fEcLG8Xw4VnnbAB8JXmKQgHEwM7kyC9RLKGxduTef9YfoQwdnwFxnMCMWV",
  "key26": "DkHHZFzLuZQwMwtJmpTCUeBSYEdcEAqy4RPHFgLdVSsjS5XMntd8qQVrNYrE6TVAtUzcKQtECSAv6BuuiYbeeVB",
  "key27": "2GkxoNE3JMq943GVMnwdeGLJCBPPgpbXcuD7d5FUL9kKNGw6oXMxaEwSfGj1tThFVPVDaLRqTnbN8DwYfgN2TxuS",
  "key28": "5KXzEaq2GBwUL622S4Y2ALrfpNjC4ukDmwbKr49cbmsVnDUAFtrpGiBDh1BmBesHAxxy6zDmNhP9F6uDBdx6AUrd",
  "key29": "TbLp4Bw6epGMNKdbzBRT2FHzJfbKbgdZH91HVbq1KbSqEUUmQ7BbDLkxrPZFeQ9VVotrLdsma6Ru4CRMvpdB9PA",
  "key30": "5ZsR1vAyAMnJ5zPBJQStHCrM7u16pZtqZVKNmaPmkk3WcCT1isZnWAvFyuWuyCQzm26KAa4mTuBgsj11VHH5Bv3n",
  "key31": "51o9jErDKwC56dfd6piEuYc5rLCTu9EhmDWvNMDsxftK93hPh1drcazSgAhgUCdtGH2VcnopYo7ssJ7TLDkcGWzM",
  "key32": "37VZ2tYawXRfLZbvDw2cTDjeMNqPwy6eCTXrRwej8MkGbmQBE5Y3TFU9fhpJpbBhRicqLUWoie6mfBEYVZ5zoEin",
  "key33": "2865aQWPwE1umQhBf8KuoN2jQdKuhHFKXdQaJS2wW9FpCG8aJBygUfYGxaTKUAo3VwpQcQFbJA4Gk2Uou9R8mi72",
  "key34": "44CdBQN16vktLbH6VUhpx8u4d1LMobaogACAfFvTAFM4ZK4VPdjCyXJJeq437douipwKsYsXsWyXuZN7aMYdB7pj",
  "key35": "29tMLrjvLJpX4AkiAPb93YxZoqUPrzuJjeUtNbPYRcTWpPnDW6zgynv2KZKv8cf6g3M8VuqGGzvajgNudMaK1Sr9",
  "key36": "3pjCLxU55eiuTwzrP37F3ehEbdNtmv2B8fZH1P1TsbPiQLPZTdu8DW9VppWLTeFDdEDxuWXEsYdka9fjzMxhUgop",
  "key37": "2fHmPDHhdbBB4fcatEdDEkSgP9i9xjz1gFjA2cZXTGkEFtSzysBfUG4Rc1ujd2ZG322NJqT55MfWxMtBdTZEEgro",
  "key38": "5zV8LKMS6v7GBB8R2FA4VHdgpTKYd8tPxr397jen4KMNTwYWFxj1QtwDGg2P8bpnWPpEUMwen9wCithAkSDtPGbz",
  "key39": "5yyLQ9bai8RVM2u9FrHFGJ2zg2FMd92TBWpdkinw1691froBjszZWV71eN35uvKwzfL1xpnShTBX1X476FrDV9RY",
  "key40": "3UjB1mou5e88AU9oUEKyDWgwiLTuvd2fsGrTRXM7gqZLAKA3i7gEKTExvRP8QttAHK6VhEy91bUGy2b3goDb5gw9",
  "key41": "4dbwPpjdWsWbKMBHipVQPhzfTt9c3SCAsX17NbVyxTf2NmDehETmWjDreeRoRRxqNYeeqqneowrZ9kgyAWVef56r"
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
