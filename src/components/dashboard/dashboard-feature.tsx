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
    "5fXzYEjKVZXnDCikcF4pctM1YaaYrWfhHnpgnoY2GXiLRbVE9nmoRhh576nghEHtK6SMWmznv7ysuF6rbcGoBxwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sTRfirr7XsnuZsHX3VBTGxzsVSjYvbYWz7UQyou2DRvtNT4m9aNwje3osRCwied1nuN2SPDMGEDBKxZ5DmEdx4j",
  "key1": "3N1829PypcRitDku1MSX8tae3qCZyEmDgJ2MQ4dtrWChGtrVvb7c9cDsFGtK1xA1cZ56kRoGa3PHWs91ZTZrx1dt",
  "key2": "4q4dJBMeCeoyeWp9SqVeK2k3zi6MTo37Tx6ChMEbJ36vfFvdiQyna9fA3p4zGgg3JX7NoobFTzHkumpqKaVC1Tmk",
  "key3": "51wK2AgREbvWd2MniUkBAuJqipxZnXcXfbYYJLEAXGg4dtTH1tUrpttNkWVyE3opiskUJ49yZRjJY8iSE3d111zU",
  "key4": "5dnxwd2BmiGyaLJ9kVdSkezKYTdpXXvKhgEygi2nxETHt1N6jcW2ojaohpUD93PGf7AAoi8k79w53fm2Lf7wdgDn",
  "key5": "T6XzC3ocDJQsnKWPbBXanUUvyRnUknrdKED6DLWzfPB43hhYjNVJE66BgPecUi1Bnf2d3DuRqhhQNv9j65JTv82",
  "key6": "5SJZ4X7GBVG3o6vkBTVXG593CVwjNrz61cUnysx3BZyJByiA9xuMWg6fzKG8USqMYo754GpJu7gCQqj3Z5o8BmGq",
  "key7": "36MQ8p7wTQEPDqreCJ5HVS3LEtgceWdUpXoWKa2jhBJF46viPMzcAMP3te52DU8inDG4UTe1AuehUANk7oviJDov",
  "key8": "2ArBMmVN4QDnzeTj7QnSoTwcgSXJXynnpBx4zfjcusCy61zUdDegCthhFBGB8U1mk9rNpoXQiwfH57GPw5vr9vBf",
  "key9": "2DbRUAcGUymdQUuZg4JBYBBhRjrLbUDWzY3eG1fJsZRrkKHDSS9oXByG2KRonroHUcDB9TzAKRcymAmzD752Lzpg",
  "key10": "2HmbzM3LRms98WovLC8WU5JozffECh2e5iqtXtA9vZNvVNRPrRELyoG5PCm22iaX9cVW1Viat1dju9FJVmcGwCtg",
  "key11": "5D91nLX3LHMQXEbhBp7k8Lsr65PrrLTPMkcBnUYZeNGxpoMNHKbKDEoRk1wpkhAuNddix1eWvEUE4S5dULuxW8Gy",
  "key12": "53RLZDgbP9GqpcPnAEZW5GeNtQMixDEQAxXbbSHQDWyVNZo655DeDSaZKTS9SKo2CzH5UZxYkH1Yets1E9XRYaoQ",
  "key13": "2s4m8WuhBAtWNUNFWquaA3NqUdiEsP8eewioMAgPx295zPskopVNgBxMDzqmQ2LUQVN4RyevLCZncPRVQSFdSX9G",
  "key14": "3qHnVnUSuHQbudUQdXHkMPU2EWfQLpWZqxrJxpDHeJJgYNKnBwdyoMxKL1wNfbVH3BAMSRe1tmT4ExUJPQi68nTa",
  "key15": "5w4i3ct5HnjkpLELF6C5z2dCNKQUsLyxQDV3gzko1SNAHkgTPWzwJiWzraiDNGehTWcpQ58pdijsXPytCgcZhjgJ",
  "key16": "3CvjEXk2hbcJ4xikJ3PnpDs6Bj6SycCr6xAkQpEdzmGWdBteDpFqfD5255B7WVSCnSs68aoUfUfVPYvqd96FkGGb",
  "key17": "66Q3fRGRmUV2L437CL3QzNio2xUhKu8W1ViUXzbwy6jHnJL7VMQtuLmKHc6N5PXKVf9KEHXPgE3svzFTahee1w5Y",
  "key18": "41zp3ChGA8daP949JdQrYqoUY7UGxLJy71DwndVXydytXsggy6Lu7VFDMGZmZzSfjYxphRmVTvqnrLP92MYYV7Yc",
  "key19": "PzZHeUMX4EqNn7FDqydfP1Qg39PQEq9TV8fkWyoSS8kqvvymJi3SQ7b7mgnici344pvD88PaTTSHxfe8pg3Z1vd",
  "key20": "3Bg7gXXCMJDMgaf19Rcd2Ki2G1jG1Z8z4R4goyx8ybnxRdrtCn98hdbwP4Vjg4fCgA7pTLcvbzPDey997VsxL6YB",
  "key21": "3XggTB7j75jPtZkxLiKWMwfScboisdNkkGneZbDRGeC3UNoLtodiUryPq6MJcy1jnHqfe7grzhtGz2uJyGE4GZ5N",
  "key22": "3wd54zUq8di1jnwKDg24ydarJ41P7LQcubxKAT4eiTAxFNFoMS5jDnB7HmgY2UztQ56oN8mTQnm4uEXUEupp5qzS",
  "key23": "2qav7wM3Fzz33VDcQENi22RSUmxjWedTnP5t9QBGoUDefHUEwwCESF5Hb3N8BpHygjGb5WZaNurvhdjYiTvBjjqS",
  "key24": "5bo6g1FkWb9wExjoGQYa2j1BmHh3QGqkXJvybPUwSzWLxsfk9SPWKbDJH9cKzfTydPMQnWvVDxTrobiY3L3pLnJz",
  "key25": "4wpAzNy2RC2FXGJqhk1teoParEbpurdhxP6ML94mf4aAdC8MgCnA2bj15RKHMWG5qgfMQGVZVM29nK369B2n1JRM",
  "key26": "5AnkTDt5woXA6QJNVfNb1fEwtPhnA638jWDbJBLxV8tWxVcqzbqPaTWTUVBJw72MkhP5sUxUS9afSKWEtDSoYYoi",
  "key27": "2G3zAxfWHcHo8f45GnaDrj5YEeWgYhCQjW6bRMo6DVAL6TFP591jt1rWxwW8XCJBmXbprSsysLxEP41BxPfzpXH9",
  "key28": "4XkiG31Fe6oVvk8rGEaUTV5xr3AVD772XrxXBaFBRXvycyURHRKpDm9a2Lofq1nw1vxTZGoWKVG5uYoCebqJSiF3",
  "key29": "2qiXETnUz167e9km8Xa9mcrbijkPHcjWb5boopc1hwQHZ4uoeNZQQQ39J2wS1SGybQ7AFxuYu1oeLTPJDVUEvZzW",
  "key30": "2ujGc5EBJb7wG6n9EDTusodH2gsGhENHHwAJvXMcfwGE5GsK97J5v8Cdk2bAoMhc1nDC3fZK9fo6aAXksHpXVmft",
  "key31": "2xbfH4iCpsvfeA4YhwjA3RY5v56BAcqQeVKiNeEg4PokB9GqmFgm62c2EefFvK96a9EZjvSbJ5NvVHaSZdwwjSvP"
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
