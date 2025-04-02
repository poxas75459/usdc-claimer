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
    "66CLH4qE87EjwwYmS7dUh2BBqAgNsDtBYytXUE86Z98nT2ZMZZ7YRYAPk8u7ED7T1fV8E8At2E1YSFh9SDNEbkFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AbEtTVuS3VnuHtTub7fxr52YZvVYwEJwJi17a2rXXtLtmC13BCYYvgMvktkfTaZK46MazqjZjK9TemvSvQfkP5H",
  "key1": "37Yup2RLXRnmD5sxG5S8fn6f8paYoptxSunQgZqszfGQ1hAkwjHKwTWafFJS5t24Swv8UGGE1b5tRWYMoqMYPFjQ",
  "key2": "5GdgZc8M9wrSMWkc2SXoAVRh38vYFtFeywVLdMe5v5VMqK9hKH4xjWXeeakCgMSSG1DW11K8hSKppvGXKmwk1dfr",
  "key3": "QiB8hMSME9KpSmBLb8z68V7yDo3KGiSdHY69gFveKmfAusD44G8MJQSxNggDveFmFUgR5C3uNzXq5R9k9SvncFs",
  "key4": "3YefkAEKVMNQeUaur4i6LcB66eVw9sduQnzUJzHCDpXNQRCfQ1MBa2WQtJM26LkrpdLQqWNbk5YxXeHKeG3F8eeb",
  "key5": "2wSTcMxb8RZjYtCcYVKQL6gWvxfLJ9xF7hKJs3h79cEYiDzq9BdSG6GDPQzTwAMUGDaU5ucB3gHRhkUZKasvhWa6",
  "key6": "64ZX9efhzxY9LGVttH5a4xEYanq8sZ3r5DMqYQa8vZ49PK2PseuBp1VRntqrXh9ZKj8TehSviAsvAokconrzSv58",
  "key7": "WUbVCh8XLJC25uFJtRrRHjqiHsYZe8pf64NxCMe8fgqMFSfn9X8Ay1N4fqMtHyecGMBiWfDVbdeK4DpWgdby61Q",
  "key8": "4QT5PeR6rbQXQE1yhBseLMa1btZWNpJWTe1b2cgXtDM7TVP8wnHyy1Cwj9V9wUKwyMU91hjTpZ2VxAotwVYcWCh8",
  "key9": "5o47SeGf6N12YaAHXGMPQ5kVzdcDrB4RYVu9b5mXT4bPRT2uizE4AYZ6zhnrRQYwTTbSDPYpjZ94Zw1uzxdWkia1",
  "key10": "EgZY5U1czaZeBML1LfoTNfJQ5KxPnh4WTW4yE1UXnvMp7u8ntpcLm8REqrgQwh5gDSQhqXaWFKupSqFsGBFdktt",
  "key11": "4jifBTRzMrbbbTArWDt3bt4DBUHS1e1pKkaxrks4DDGkndez4aWVGGgYQJ2ss2VRR3Tw9SzEBHuiBJuKVt2cLmU6",
  "key12": "3a62pSzW3No8j1GG5kciwvyYXyavaRY9td4E2HM3vC5Abzq5fuZwNv1EuQkHUUQvCvvd151Fn7irrVXxr3LVx224",
  "key13": "2ZeRupsXN2FTFWZXdUgXLcphu6RyX1QHafTs1XoMxpr9q4YCK1Ha2X9T1wF71Eiix9VYq3XQJXu8dK6hKE2EEDr7",
  "key14": "E7Nh7qDSMjqduKwfidBeK7BfoQLBQYeSUyCbaWYYFSoovYFo3yvNR37qAEneBSJE451ZxWXocnTtj2zxgN3DZ9d",
  "key15": "4iyi9kWMKu13mzcgBhbwazT3in9BSqJtdcLSkWxyeTou3yGmWfxth5vcbyK6rMcRF57nYK5wrAJ8ExShvzdmsTBN",
  "key16": "4maNXfQYgUqwfA45CLnQPX5SzL31HQmXrEiYS1Xz4qd7zUFFP92Hdt9QV51Ro6V5rpAxMXCjtfXYwDLCmyVmMGrY",
  "key17": "2VLh2f5EUyScH9cYqWf6QBgyVPEf1iFhJooXuQorVtYG7ovXa6jaj4ogW8aMvKoYDakwqHmyx73t6CJo68UCn6Q3",
  "key18": "2h277aManttrxKiSE1EoCUKM1R1GTLVvTAfKXWgEa1i92FkgZDsnePf5qMPQhBr7RusPJqqKm4XiCMtKZwfT8PYJ",
  "key19": "4wDUMon7N1iYK4qNedR8162NT2mBTosUzfADnGq54ttgo7DdGSzvrMzZrCVJ3iQpXvinWuYF3bp1XJ7idUe1LndV",
  "key20": "61mDNjRgsaCDnq1H8NRGqCVYVr5gGimbuW7hdJAuABz4oe9pUmqSSTB4nfcFsHUYmcNXxkQkCfnU5MRiSrAhRhJZ",
  "key21": "XmnNm4RXFQJkNgu9twc5afM4AuVgBxR4drXNPL64JnMrPiarhfnMKdHgEVW4cN3mmMYs16BpZcC4rY1oYBvuCP1",
  "key22": "4ChqzvCe5KeWnE76hRDJuF3Zfu61fTvrKbVBpB33ZDP5p3tH1rojS8fjCzfQ3dNge9k7rvCae9YFwpH65owuJius",
  "key23": "4ZkzMMqAMqWBKpPrJo5fSC5nyuCVJFHqtENxtXYE1LxmdvU3Jx9ocfwEuNPZNxnDsY4JCmyJrw4bzzb9W7FaRiPh",
  "key24": "37uFX3zNndxDrGTkoFVbMzBJvzq1L5pSUjemBfjcxynkXo2gpKs77WqmgwmG44i1Jt9soFcJgDBEtiKuHzNiS4eD",
  "key25": "3ohd6MCyrfGPc8V9oVDBSibat5q5hhoSsKXBTz75xMnzFFBX873akhjQNKprnsV9x49taTSAjSXBNncmzaiEtMV9",
  "key26": "2zL4SwBRQzgr4Ug2Qg31K7TUs9nM7wXoooeApCsJpvY1ZYXEwg3rJzQQYK7qs2WPjNhh8TRyFxWcwBqLiXJ3k2nB"
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
