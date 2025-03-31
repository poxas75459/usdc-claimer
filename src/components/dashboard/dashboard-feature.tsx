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
    "2W9dHVPkZ6aSGxfHaM2VU4LktQ2LuVanhCRndquTCwhcicCx4vgoxNajwRGqLFkeZbNF2JACWxrmNUP936nBtj3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GxDHrF68FLhVqkDBR1NXB2BMyDoSeezxVhQMPgATAzwBxuoVdssoxReDCEYczLEnUcV8RGFBAz6s2AR4e831fH5",
  "key1": "651aPdAGBvUUhw4aMXusLWPQ3DtieFwuHJwmhZTCqezFNrkpXEceySJQZoY6jwxaAAicvhpaJppPWJpab5AftJky",
  "key2": "5YqPm8F7TYvpnF8sdzWk2gEYDhtL2a9MiNT7W7jczoWu4Pn4ARdaRUaxSydCbXKhNiRPKa9jCQx9F4QMfKWtTXbH",
  "key3": "3gWM2gQVFxnDz9MUp5Z6ndtBtkiuUkyEZNtUNASx1ncmjhQxngLTcnWLburvhkUjWX1QdNXGwCTxbgMMHZzubbRX",
  "key4": "5JZhaiCba6uQfVi26GRsRWqiGJ3mQHbJGyHPXcfpfiTmQ3dLUJ13JKw7TBpxLn5X4dhjEkeDq9PE7T1q7zgGusTF",
  "key5": "tBebzpd8WJxnvVuLryyKopdNVH8aJ1gNfZZKbZr8pkDbbVLXz2hVsjycTiRkQirJWAQJRcEbv6prKLXQ9t6JNpG",
  "key6": "2ricRn4oPHWYzQicFcQtWTyBmeRAjSwUiFonEQAvadRqwNJNgkjFdf9kmv4EHuE7AgCSN33F6HWFFANyGLzCNTqu",
  "key7": "3KME5ZUFpH5FrgbXAkBvfsvFKhpGeB7TaeQaXUqiq6jF38EGsVX1De8JVFXENVfNWL3BmeLRnuR7yPQjTzWPJ3Du",
  "key8": "3U16S88PTwjXWjByE4eDxfFe77aDRzqzahLTwGiGb8TNccmBEvr2ax5qw6cYTSkkxhRMYJSDNkQqJw1k3FSEdyXx",
  "key9": "5eKDX79nzXapKdS449wwsEbiS6M4qfVmEnPN4ZsiUgFUh9FFTpS3c9wAgXXyL5bjWfeHRBaTKubBHHsXEHRcpCPX",
  "key10": "pLHQTLvRqSyEjn7w9g81GPxxDgbyBA9MZJnE8dm8F9KCy4fXxWUt2eQpJuoYQzg4u6Nmu6hB9WjDb9ee4s8hoGj",
  "key11": "63VqedfQZz22zHKQa9JkDKKYx6TbPPqZi7hUBPghwwjvcx4ca8726onA8pUtyUj9Yq2AfVMyCnApxgNdchBPFaPe",
  "key12": "5DDckDXTxB7jz8L7m2SJfKoCFWRei456Ptj52pC2tYb7YKpoKPqfB3yQsdMVDn63UehcqC2LwvKkPsuUy4qTR988",
  "key13": "62EecThZTe5rGBcXoeWqjqd4wh4q9YTHgf8VLPPHAwTcP576KHX5ZtMJJqUXfZQxQPehkEdmrtHgZTJ1MrynVKbX",
  "key14": "2r78n1Xp4oR9jZN5WNkRBGoURc9ffSN1VBNyebizPQk3Hik3doyYEErGvJQUpJ7TYx65vXdwHg7RvSjnMvmpXd1Q",
  "key15": "3B416mNAY6kb24ze5smpLMsTGZdv7nGqi7HtZvmuAzstgQCkD7Bmf8r7dAHLavEn4TwKPLpoS78AARkC3KfGXYe2",
  "key16": "35G4rZAvdpyTvyAe2XFYVBjCP6LywnecJu8KEeo7Pcm6XCbtgtCTn8iSojwXeQ8V2kuumkAuVJ6X3S9Y9eP5uGCF",
  "key17": "BeKu1vhmhmXf8C87dwdqyVENj2ErZ9iE73KTFq4PsBwwewztQbdb63EZUbYHioxoXZtdTXrZiBrDZbTEtCKzX9u",
  "key18": "4BYEF2uMi2qmMUyNZW7DLBqiR1V57wAYUQLZoWvNoR7UxpxzbCr1XhDp6MVYzsPboBt4BCrZdy7fNHqJBsSZZEWN",
  "key19": "4bBq1LPagFWx2PgtXhCW9YdggRr9YfjuJRgT9PL5Z37w8asheXVnECqPxJhFR6SvEZJq9T86AzBVXoxb2fyXrP1b",
  "key20": "3ZhMSLQR1n8rGn4NZHKdDriebmb3jREkJuMn5iQtfnPrjF69mrn57eTH1Yy4yMSvYqexc3etBvSVK2Rr4KsFWwN2",
  "key21": "5piZXDrqVncTtAueNbxJ4WWHVy2zSJqupQKBLZCy2FkKWvf1Am4GhBkDwFYGTpXDZ92Ujgv5pGNqTXdMzHkkj9bJ",
  "key22": "4e3iZ9M2spcoVHztgoamnNBNj2aSLEjyK1MF35YAwsUkETcrczwBnTNXAk39aXkiy68XsqJzMQ3UYMBFK7fppRss",
  "key23": "gyiGJK2JFsaucFhUsUEVBLev6NV8mTmzgJ3NSpxz3Nvc3Dun3soq9QZBUdPj2LT5Nf3vR6tELvWsZPh9zBbypnb",
  "key24": "2jv3gpQFmqNu9B86WTBNWXaks8Wb5ruYcr6DLH2Dx5Y22Vm24awJDjGT4jDuDx9hQrHiLN5uwNDjvcAh5xC3LV6J",
  "key25": "4NXTBy6UAyRJ1geZ8Po26Dej6c49mYpBYR1H4pTiWEKQxG9s8QadF899SeEQLTodptFTVtqLSWUgg4Be94LKHSDv",
  "key26": "3Uio4r7f6r1hMah4Adi3x7yusRWsHfuhbzaJqQ31gDKJ15r4VWZzocwqPFEPFPCTbpZ1yMnx4FAqNZZCe8NjS8bi",
  "key27": "4BQP2d5aXS59k3xFnH6T1EvpumKNZhvymyNkCgrrUuRM6mv8SKumaGp1ZoFNjmWyf3jNSJwNKcCyTKHXFhBiVfKc",
  "key28": "YQ3a6fvnfVogUY2TjFX6ppsR8mt7cjfAWLY663gvFTup9spA2U5FaWoXxe3pi8g3qXiFupCuM6ZKVb2PC5WrouB",
  "key29": "2c5ZHaaCd1ESYvw39DseWWX6EbdJ9q9iNZLthPEAj9sebrRCrstMsJ3jfSiKxDDCRoW4dwhYgF6jAQSMSxSzbZwW",
  "key30": "2gojJqe9bJfiz9rd1TgyLpMiKpK15bSvjGxmaLLKgJQuwUM28VmqamWumjyDyR9hsxJUMcgV44T2zNmhFaB7ffMY",
  "key31": "4BjxvK9wsFAhzCKLeY55GTbxa9vhXLtcgWSHgFeSZ7Up7e3nCyX6XsghyBAbzpbbkdak4pcHZ6k72TgaWj9KmCRi",
  "key32": "KYKw9UKUrhAi5Vnb4rGX2j4GgDmjsT4Y42NxskHUVJYgqLmcEUtUQwWHGyk6tzyPf153NUC7KCDQNYNbX9i8TnU",
  "key33": "2h1iqp2dA8coMP5KEGUqsG9NCgcxvDC2hwRgGKEYjqsfPNajmf64yF9RHdtRSr5DTiWdju5UBYbr8ieTLnQgW3rb",
  "key34": "3c14RzrnnbVkGkS3TePG6MuqoukiRuszevDdg22HD1aymbjuzCkvDXw1tG9LM7gMtqKuNcPdxKG8gHNsCyVhXQBM",
  "key35": "4ZycWdvdQw8zPBcLuXAAeFoL8FayxFjtie3bPaZo9aCn6LiwQ7WgqUdsv9d4NF2Wt2XoNjQjZaNdrGXrx5xfdyRh",
  "key36": "4xnrDUWX6D3QUYpD6CXH6aYsi8giTsfcJV37gWxb1NheLdYBtuzrFQgHYPZHdjgPKKnLWY87wnCSgrY4SPopTauP",
  "key37": "4gtasci1LCXgm51666f2ZDCRcWybpmoz7nmbQ6iVCBTo3xb2ivhjqjWjSBBuoPX52Xe6wxRcwfr9c3RV2Dd39V3D",
  "key38": "3Cj5CmJCn3JEyCm7UENs3NocZn8f77Qu6nRTo1XwusRbimgHjdpRKUEMYJpHpttEmxxAfjyV3pM3ikRmfES7v78w",
  "key39": "3X5bLzaxVLtGSPHgjKQdgFZpsy9DnJo6gRHcUW5wxnZeeBait2BzAw9ncHGJmTaNd89fSecH5s7pL7Kv8SuGTzJn",
  "key40": "3tftV3fTNAJWa6yaBAr5p5qTcxvRRj63gu62GqoqcYMVTSqpu2AQZedF9Q8imMgSxJs9C1PnJGNKoFU3Q4Vey6tr",
  "key41": "rs4G2jijTzKQBVmz4JYWzELu32pz2TAxutihmGwrWPEB8DBNNCLEUvKJD8X8ZLDAfXoSssoTbPodUmGacmrn7t7",
  "key42": "53qCEGxbTrSs8LfThNsEG6CHPM3EomqavGMBkYGfFMrJwkxXtdcikQAFD14HZsZ8ukULLMUs1ZXLWNxy5XDrjE5P",
  "key43": "4MbmgKFky2pv8UVoFhLWyCQ9Dh58hs7mtL3z6FJTP1b7HZHzT3GUXDZT1oGxFY5LM7MtnAqhj9qxepgUgKERpvHT",
  "key44": "Qr67wXykFJ1gCP7LCCegJeXAPHr1c6Y94LaVVCYjtmoAHA5Qs3eVqhSeKqCJj3KbPRnBijCrvnuyxUwhZc7oyKb",
  "key45": "5NeEuNnAjnNcPXKJondB2ij1YtpCrmx9VqqdHU9MMczJR7XQrvZEaY4sv6qP4s16C99z7NyGe7mDHj72FF7Dij9J",
  "key46": "5KLdvrhgvMdQAapirn3oXXNDk9Hn9Uwmn5BHWCPga9m7bpbBrtG6ryQijQfaCs3pAjAFuq1kbyjaJxH2WibPRCYJ",
  "key47": "ZZCxk5Jy3LHiQzXbtT3enpG6vY5YESubAtjgkXsEDMv46jyEUagqoYfPrwr5MZNJyyXABzhkHTTXsKf8hEuy4Di",
  "key48": "qM8FSHZf7PXzmLVfDWEYPXXDtJ9W2u5PCqsxUfGpWwEk1FVtn15FX281vQWxp2fqhCHw5VQia2vm5GW3GpxcTFL",
  "key49": "4gSnZktqXC1y9pTvwsD8aNQyHSKYmoHq3rAnNQUj1oS5pfpGc6GMxJtRUzACGbB4dR2TNsNyggpwkA2iauAges7f"
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
