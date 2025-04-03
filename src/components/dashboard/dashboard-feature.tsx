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
    "4cZDRJkeUG4VHnEsW4CsDe1oZs4H2jpQMkcootZsVEW2yiznHt3DYaiai4efYdfd9tnEMxDkCSFacVRzoYuSwUq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CY4Hocb8JGaMBjauFUKDcyfakgnWeMnReYcJ8Ji333QmgRBkVmGewuizpFTUnN361KYEDXhQSkodDmiXV1M7D8k",
  "key1": "3enMXbNhdaE7SZecfAcbBnwskvdbqyNoEMeY63WtRDpuwdz4kWHBcA61HbadX2ZjmKwcaGzoK8TjyWNpmnDdbrF4",
  "key2": "39eXzN9gZoswYEjimaixCyuojLFU9yWHnCYuwCiRHKsMLrD8f3XkbVKxyivP8irqdheJQHzTJLST8Czu51shwgVs",
  "key3": "3kDKdyxYNko9An2ewjTwQTua48TtkXts5Qw4NTSEvoSXYXkVtHRa1W5apMwVyUzmXBzJnCVY3LPVL3tei7MXyWYa",
  "key4": "3UJiqd9y9jKmD5mDRdo1QLVpnzoY3wNFNxi6tx9Z1j86aK9SjwUbt63y1DnK4E1NQQLE77D7RGhbtfmWZDSpiqJS",
  "key5": "5HGVVtNNs9toSFSk1whkjTSqLHcqn6CtUp7s8s82gNuLcCeuetLUDK3zKUuux6VnCqmK6PyuZyhSJX6HE81vhhSf",
  "key6": "2J5RjeZRL3QGSac8XSRGyC85GxKmHKnkQZcXELQwN1SZo9tu39FwsR1otsJ3ydqEG9GPDVsWV2B4Fx5wF9jmCRvv",
  "key7": "5arQqJeXTkQSBzGtZmMm7MCoa1JmUJaMsyZ4Dpazdf2EsENykhj6EPKBAEmxUUXJtJ8TbUVviGmYrdSsCTJdYcQx",
  "key8": "4N5MfJd7Cn9oc1KMpiYo4vyjr6xNYoZx92MTrHHCHfZSkiYqW21UvF57gxCsCsSurCLoWDCNadJ7esFJWVjdYSG1",
  "key9": "aSf5E5Ed7EYyG1142vtM2K5HaiG5oUjN54V8irZBV2LhGTz5sMBjoBkzciXg1MYDxHRu49KcBjsZQncRdbBzGDp",
  "key10": "4PAkTd6yq8hoT5Yf9nwLdNJs6bCoMwHyR7vo1gUyoAq74ET6z2XVL4tKmvXwdM9m226mjXD75EhjMymWprxtoJUJ",
  "key11": "gDLcaPpgiRHK9gapLfDY4moFswVP8UBM27TAoDETsk2cvPCaagG9B5RVrzC9oCC38Zm61uoiqfukbaAHnfMtZLA",
  "key12": "24MGbXLB7x5GHJ5w4MEtwN1LeDw5zfkqrNYM9WYYgcMpSZ7Xbx1CJxWjEXzo93hJraQYY4yUMVyFrVyujqkJVYpo",
  "key13": "44KwbhApgL54fs61V5Tq6pjCiAmT4e6sivYbuLmR9tKMxgexujWvrDTdRh6W9LdVTJuVAB1DjDzneq4bvNWb6mrv",
  "key14": "2mq9MxVs5G9cCSSTz4Drk3wiviu8pziPN1T6sQ24XHTBz8rshXqMiuQZusfB6RaUaPPxu24ushmxEaTAriWNdtPg",
  "key15": "5JsK6m3swxNaBtrc1WTkkLLRB7dh61T1wiurwBrSEcgESDZ8KEtXVU1Pi4jGdtZ5My1M8fpn4iPHxbjeEAbfNtYn",
  "key16": "5bJsD9REaXPXvrVVwfMTh2Wo3duLBrRtk8ZZgX41EhNWsusHBr4FbV6hpmh42b68QUsATh5s1no9HvPNuKZ5wyxA",
  "key17": "8grciiWHPwb4ggtP9sMhPptzhfc4zZVFM3KwuwemCAwoH1iMSY1KjoCd6T2e8YPFM7nkYKG7UCYx9huT6GCwxJW",
  "key18": "4xkDkCrJiyp7Fi1XdVgCME9BMUaZDWCurDYFYuNSqA9Nqr3w3zqaT646H9GHykZM3gMBMSD6KfZL2Zze6d66BuGx",
  "key19": "Zf3rCtWovNFCThjircj8FSgpguzoLQ5UZXi1RuVgh75u2M2TsoZo3a1v7r6Dv1HcifhrRywJQ9bA7UTmnQeM8ss",
  "key20": "5F5LL9Xxq5ZcXGBEhoExpYduisbh5Xs3xVLiUJanU3H9wE444VmUVMPhP3jQZyrNQKmoVQMe3hrhsYAd1yaeFxB1",
  "key21": "5uxHHnWzbzJ1ALvNrjmVVWbnwAw2Bj9yC9uC5VvT76KeqF5qaXK85dJqBeLifoQRdsxRzhoJ3WNgq2NwNixHezx4",
  "key22": "5iZ4TJq9yiMfaPmyYpDvmaxz2T1ZG6Zq4WSny8YM7sY59CYsfRNFox2fknavjfY16v6zCdVRjYrEs3GMSvUjyxx3",
  "key23": "2ENEFS9JLnZiSjFRW7TA3ac52ZzDAkMsMHqG4Cdv14iXnBz9x6Rd1FuH7NbRuDN8R12BFq4EtHWSDWTPgvuJuZSy",
  "key24": "8ovENEL9vde8HSM3sM3oTJBPDnTbSqrZX5ATKoJcX7R9Rp9Hsz7KqBk776J6wNtXxaS6heHFbWQ3DdXSHkY5FnM",
  "key25": "6sW8mSDzjMLuzJi3zWM5g4E57yvTBJfHNP7cRfkLAtz47ozxxPm2wdE9JpHK73DDgevePwferbtdB1hkNtHUfoy",
  "key26": "5bCn74g58dnwwbHS3MbNYoKSVGURTmN2cRq52eYnPkhX955KC7XUQ1u7p3EfYY74gQ2oi1pcHK3XMjup7JGBMijc",
  "key27": "3uLdQoeEpcDPYDBFEJuWMtUmnS4RonxA2UjBmhxk8jczmyz6F4hqF7samJRJdwPXHsbkbdRoP3HmpQWSQHNG15ML",
  "key28": "2z2oXPF85zuxwMMvgZJ4m34xf8peDGX4ooyMuM6JN5bJYuzj7L88LHeK9pCBt8JVAfwKhDDMTxhbvaf3YVxG9LAC",
  "key29": "2FS3HvuAtH9t6gV5uWeFc3onmfmR6KjDvsHtBhfpPMvEPnwp3bEwMuxsG63ppcff1pVb5DvFSgY3qjXKEQxe1vSh",
  "key30": "31GhBqFnoo364C7Ek14T3BgDLCscdCMK9DPdWtuZxo5iNts4CPiDRGJgycN8X3cmPocbrREiBQo75VYhjej1jLgj",
  "key31": "2vjn8j7BJKu9PREifi9SSKNx3BpfDCTECU4b7AHMGjzs9nYPD4s1fyiJoFHsywMF87QdbuQvB6HnDXpZXB2HtHr5",
  "key32": "2GbmPokcQntSdicAgRXkoWqjEE5wdH5kUvqXPeZQ9KXbbYdQhzAizJuYYopcRL2HwVAMJxZVK6Lebetd65ZQuTGg",
  "key33": "34BxG3Sti9s52P1c8mtb52jfUkEmBQ5DuxNXiv1G9oQrcTggnsMbaZmh618ZQhNitKeeXRX8Cjt4LtTMWY5S26Vj",
  "key34": "3xp21LWwywJ3Xv3GvhU8zE9ts7yv9At62kxUxQGTzDFR8svM6Toura72KhMqK7cmR7oc8dF8ocmYhN9HActQxvbZ",
  "key35": "5qRWEg4oswqCbPNzVpDy3Uj2w4TdbRzYZwn5cKHpt8zGVaqzUXvEGgbZ1HSSuuiLfeKyxd4sMHAUrB3wxGqzHgTW",
  "key36": "3U14m4wSefQpnA5LTpQ8cddxt2KfJe1xn7TndocvF3YjKSutpB7G7cLTBFHahotLqp2577dnSNCfzvhyeasdtSui",
  "key37": "4fne3Q6jXxHqD81tx4ETsaa7Nca8Pfkzim9hKKA5vmSPJM7xvURsLdKvrPjE2FiSVsU5mJ8Jsu31Zu8exsk4i7Ex",
  "key38": "5jZMXimWAU36EUgX1eeDp39V83HhyBQxWi25dJyAJzSoiUVZnRZoYyRGHBJSfeC8wgtSC34fXYzeGMuEN9kLbZm5"
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
