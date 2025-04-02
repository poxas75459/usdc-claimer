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
    "48pZRhtrCw8StqN6EMGiWk11QC2hXU3ybcJLNerviAMnZVAU4onQmCwcur3eL3QZN35yPmedjz9Y5i2buJseV5Fy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wfnpZTruiRBxCXQiipSjGTDKLgQeRDGbZLViMbdUsK9unGvBWeeVVzYbp8YZwA8wyofRXaTQpiJspfz8Ex1q4W5",
  "key1": "4cSsntrbHxrVpYLbkCzGcTRYsc7ougjbwyDS4AdRTiZvZVy4y7YTDLN45ChoA9VekLzz7DdPtMQHaKLqyCtQcEdz",
  "key2": "2taFu7gTwSUNfPLH7Cy3Z97JoGfsC8N9t3RRZaS9RMt8BU1QiYAfVUbha1mh4tu9FhAjvVMtGFQnsrrf93cLcdzB",
  "key3": "3qS2fBPKXmLxUkNxKM3Kx5C9HrTgV9ZZPQUaELhGW7c6dwgQuMdCkNnWwjdTswGDmnBe6EjHBdB5bcTr5m9RfX5U",
  "key4": "5M9UpK4DKPzvEco2gjtE8dxgP8y9i5UqtazrQtqjBYg1PyQWXQ7wgPTjebKaAoKLTH9bfmqA8B2MS3g9oAz9JeyM",
  "key5": "5vnS6CPeMrDYiTr7Xi3bkd9ERbpf4UudRyVLoiwoq64MWk8Amw2WBpDvRFadVSTvoM62h5RvsELkxYm5bhG61KXT",
  "key6": "5dXPnnDFRuKwMBCct3vFPNU65y5T8JAqEKUkMRd2uch2ZHv9cwLn4pKKqrs7k1r34M9BxrvWtKpgbBeieM9bPnT9",
  "key7": "5KXkyhM8fYdBxSy5YgqEA4tAnFspsHcVVxhQvbpSatm9Vrs4mFX9tgpTT1kunz3sn9BYi4sej8KE4Upgd621kghF",
  "key8": "FHXivWybPJv1vEdL3uSVSnc1u5FGdrG38knZhrd9E1rDJaDVoa3T4fw6bjHszEAMknfyMHqs2KbnxYakG5PqLE2",
  "key9": "4DsEZaYyDVo4ggFub7yhNJzZ3LY4VFNLqd14yGDzo8PVB8h13i3hFLwq5K7zZEgEKjv2KJC6m8pSeh3QvHYjtHQA",
  "key10": "5b4nxMUGpdQuDsmToadL7iiMxhEXEsXSWnjDFdXH3oKVGgU5TZziu4n1SspgHvnrw9bo3rahZqnYQSJMsuzKSoS3",
  "key11": "5wG1mHPRfQpoUftgygg3cJsrypLYhbc8tuJVaQYSAhGux8cXwUPuiibK5SSSJmaUd8yaTcN8Ac2Eggj72n9ggat",
  "key12": "2s8uHULH7EZBaKDzXgyVsjvJp4ZB3JkGsSVVYRLGjdvY7SAvqeoo5ogfcaqxK6Ed2tyRZBuVKgvtGewcaRYRkTTn",
  "key13": "3ngWWf4e93swgQkQ9hEdWHXeAX15WMsZZaQ1cHgUMy4vUQ4MyJWYxJfTPoMi5feq9XtUxZTQWt5EhSqQL52yxjj3",
  "key14": "27N5gj9cgEKKhsokqaXkjniGwY1fZgxAY9dpqnrfNgdyoz1AB75DJeBe6dXEGK9HNo2Gf2nc89vW14honnaLzzKN",
  "key15": "316UPxeMYyJXWHTQwCHRNa5Ji5XdEy1u5wyveBfy4YGGrJCNkoEuDqdReMKMZk2igdcLfXc7oUK8f9hq4mweYe4D",
  "key16": "MkTnVVZo7gXoupMsZu9JTwBoAF8vftuqE4hmuYU8BqYAL4c2LWFaFM6XB1mYe3nPniFvAqMaVSycd7ETcwyRaPc",
  "key17": "2yb98GgpjXTTgeBQ676JR7jPViQxYufegqPxVtFnPFpFbTZkmDo2RgvNryfBY491RMW15dLR2SbTwPxwJe9Nc6Cw",
  "key18": "4zeC5jsEMMNEqZTfyjYT9zofaGyGjDLe9Wae3xxGQfyGHzP4QXJbyt3ZfM6ymiKj3BUJ6SyK4BCAYgVwo5AxsBN7",
  "key19": "31ntu2DdEw59ddRs4FpTj1qtRCXYDMkjKZ4EMVtpSuQei8qL2HLz8p1UZJumHCs5n1t1bVQVHDoLM554M3hqWzUe",
  "key20": "LobYQ2Jsws5Degi1c11EUNnXvUb64ACye6U63AxGMAxxD43GLih1qLnjj9t7obUmT3HUdurmqzPmumY8zPwzXjt",
  "key21": "4coLZSGuHv3nSgBc5FLMMcaoURRUVWgDXEs5ScQh6sc7iSgTwnKenMeAyWg3WzsiQKh6WFnevqEQD9HYUUy8xRZ",
  "key22": "94V2EZamVYxKcm2vXxADBJT15wEUWGiHyiD6kcE6RTWL4hsQdyDvjfVv5WDsWAjgdYGXFqL5Zq9bhNKR5XkEh6c",
  "key23": "2vLqMGFMwxnS4fbmgBEMrwZcSPwzKaza7rnaAWMwsUU5McV5cJvH8xvhCXDZkB5hGuwqqbXH1tuHYAnZuD1AcvyX",
  "key24": "5rj32oGZtRpXVUP1GVkrk3uPbuj2NQPswp2s1eR3UzmfchUYDdaaZkgQE3vuCrz3ufwfjQTVqv7iNeoTGURnhtt5",
  "key25": "hCxszNpj3YeVfFnV9o59mwpmju5MhtSPCeXRKrZ6ZFzRZ1KA3N15bDg2xMb3ur8iP3vShoGWCWVdtvLtbaKVMiu",
  "key26": "QJzHCxpcqKwtwQmtdd1GuWMJbCSkHovsTXvjG79Bc4JUQ4UvPbzFPLXzsKZFM7Hi8Nd7H1Zppswf1Vrm8STBYM6",
  "key27": "5YPrnKJxUMTUm9jbWdbzwy8Yxssvf26tBc94ZTAUyJDvoCPrZzqx4fUdcu1fKxcxmZSip24BjyuA5SBQTML9z4a2",
  "key28": "39HePFjGZqR9d26V7YBC84NxSLWgSo79nvTb1eawapDPX9GzVZYrKoSCRmHjYLaCZAcW3ZZEVYoHEj1KCrAxNTA3",
  "key29": "47cgcvzaV4xmHRXoTZG67j9XDQR1uTKUYqRK6hgGxaz9RF6ervxcQDtfZ4coPhxRyPLfffY5dtKNYWyS8FvbTW3u",
  "key30": "4xdSdVoLXxJquGgsNs1nPznfxRwfystQQV7AeXBrDBn1fZLbwPSaN8iJhm27h1a686jLkX3h557X5BFtVY5cB9CF",
  "key31": "3MTmikpPe7nfxpprbDAdzk6g1ET1TjDdK4iPcHWprnGiGYNURNonM185AxyR4WLcR77f1bdhXmawZv6Mm4oP4TGq",
  "key32": "2F4Szwn9kc1MFUDBPEzYpiZojXoho4ozpMBkmNX3HhQrXJ3eU8Vz146mMtVhxQow8fc7mK3hT5cjc5FW7CFdNGB5",
  "key33": "4FqJzcBZZBfuaUYYfrAPVsZWGkw1LQnuoMLDejxBZQ3EeBhk5B9PV5Wug5ao6iJdx6nat5JZDsx5wXHBqYDhAAde",
  "key34": "2wMU9ehuQcHbvc3tAxHHYKyrNrMoVf3bXhG2si4VnK6RqMfVJhLstQ9QXUqs9dMaUbyzFXPsuaky7WukVmBe627e",
  "key35": "45MkLptvsxiak4Bxz1dMJdbX29fNrJite2NkFJYd5pkxFK9JF6Uc1SuPXVETcJvCVAPtongMd8eLm3QPQNmto5r7",
  "key36": "66zzWvcpEWEwowGdQCBVjNoovnJURGc8jmXnSjAWvuNwBrt8AYwwwQa1CVY7a4STRoDsd6z2hDwEnqev3YiiJjmw",
  "key37": "47pVncYXR73NRjiBc6Dw7z3yHc6fiUuKcA9p3aTAxTspoxA2brvaGAwiAEeDxiETxtS9aDHTmCNnA8APbTC6buzG",
  "key38": "44XX1ua8bMkJMqJK33WcRYMuWy95DoYAbU9B1JUSwGRcauwNt25o5pRzWcXASSBQWfBwY2acuHxPfzDhQCPNfufS",
  "key39": "4KCffZy2LrKdFhA9k6vBKzuiUSMxgHwSYCoAeA8Lgfk5vRtvmNQrZtVXMBjZGFXTTbkTor3fwFazhTmw4XHNN2oN",
  "key40": "4fm1TMzxg2zEXV1KiECVNtxPMCu2CffVRVj9KcXbFq2HYFumq1N2RsQjosJkVYGxDbwrDNh7SUhTpV2rMCtAkijj",
  "key41": "YgEt77xdaVV6VEXmwyxbQfS6t3GyFbptuKEcccnzdUZYYgt2BiQrKjf3wsJ4kbQTDqdLc3ufbJHLithsPBGG31x",
  "key42": "whGHnJxruVS76rVsieqs8Mdg7UC6N2yACJtTEa1a9UkxqnfM5Ui8anL3ro7KMoPVxifdXY37zRAwgU9NGkpDPX4",
  "key43": "47WNyDDzJHtrJbSqrDB1AaBokczAbcXe2Y4ybgQQMxFCV5sbJGHotpCJ6gnGPSCdzYoodvfJe1oGoj4NeTTL5m5F"
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
