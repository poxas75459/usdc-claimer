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
    "2mSnp2yVCqzTYA921XGJXZeXLJ9oCZmjFEyXEUVEWSKMxZUfjDrMYtQx347FdNET7VxvkVJ5TajVXoVyLvVTR54G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gMz5RM3kzQPiBEoBkuCMKy8wCYxuUUSszpZrtKxXQwgYZuQJsK2HQHTK17E7cxeWxRQmv6A3ZvkYLM5qzz3bUgT",
  "key1": "4VGxsNhkei2RB3Lg62U8kqdVDEohG4Q6SDDXmYRnVu7iZpFvJJt45PagaBRVU4WEJPguJWGoeGUbTTasto6qaW7x",
  "key2": "5XFRBGckGgoCizgSYFeevk95qTGDeHxaC4RYKiVPjX6pAG7zBhW6UvQBLWV5jUJgkpmsLfmAjaXezAXx9XsCsWFy",
  "key3": "5rPmgz1KcyrNezRAdGBbSvNyqvzyFx6aQJJcAppWeuaubNwBD3V8Aw1xSthL3fjL7zMkfyEdGpPFUsoSo94CKRuV",
  "key4": "BP72PxqwWdWvazsxXogvW6ufSah7CFbCZUZGAzjpwWgoLfYAvkGqHtzZhZor1j699UwtYpXxBvs3ah5BGKYQw7r",
  "key5": "43knrjoLBPSFmK9EiVmVDZbBEXXmR6R4J8ek2bBkStC3F1YHpZs1zwE51pVJxSy6E3o6Tu9SvTRndhNv3jJpWj5h",
  "key6": "3XEpzBrgd987zzVerHXt2HSXt55cpTTo5CuP7AFPXoYAdDqvxLFY1CPANNr4pdVV3Y1Pjg4cGztnZ2ZL6vZiffjd",
  "key7": "4c9NvoDe4KNVrqQVSjs1ygQ3SzogLyLdWjrW25ta6cMhg8Cf5JwiRoMMzhdcAVgpzDJh3AvE7z88vHAFtzVyEjY1",
  "key8": "5JviSwE6z2q4xbywN5ZKrZiCRdwuSMYrosJPdEjieoCDhWt3n1zWwQb6TEs1evuWY2xuLPLBeJ4im1jU6Q6yfh6x",
  "key9": "3fouFVqmzDxXfuu2YQUDi8FpeLC3ar2rPs6kEhiRRVRCZiPD3wQYv33wjTFUhG9DZfwPYN2wpwfPSk2TaZNB8MhL",
  "key10": "2CUyQvPqCvg9HRTqUKU6ViCrEavoFriANEwcVzhUcZMGWN42zmNwo7MnigZAKiZ8f1KyGjfzso3KsJduYEE9Ufwq",
  "key11": "34RAu4B3eSSxArjPBiZCiyhZuLc7m9nVxzpdrNaLVDkTJ9FG74Ae78g3n7MKYDHSTtwXvYVJLH3HvU8gukdtY4TJ",
  "key12": "3HNbBPooQqJf6CRbUAk5EgESzZKqWC79rVJYHS74o1hhsSEiGh4eLBZU9AZYwffec28bzVjirAguTgYDQiUoHF62",
  "key13": "266ruqtxeAxvhP1q4seYgzaDNGQd8k64cg5DXSRYXPpHLaaKSrPMDsAKQzF2CKx49tMhjcvmPntgsQW4A9MUKve8",
  "key14": "3hA6RmaDvB3JFrNQgqLFHxrsN26VnGUF1YJDin9fiNxZ7osHjcyQooo6QtkeTDA2P3Ej7K3RsV2DpretP1XPWhdt",
  "key15": "5vMdTAb3QtjoGwU2nZCa1MifaXB3vdjn55WYDq3V58HEgrpGV4Mc4emic6a1gL5VDvbhgWDyzW2oHXwm1pKUBLiJ",
  "key16": "5gBJiYTNNaoQG7mZp3xAbJSZwueaJVgvD4CMDEJ8AAiUhUJ2E8HzApJPQ3oZnmTJnKxSVUa2n8DzLdHKQ58NTrd9",
  "key17": "24y6upd7PDc1PdTZTe74sW7oFDDbqMoXZtMBtpEvG7xYEzKgL6MkdpEgRZ6rQECDt7gcw9CmUCxLPFQf9QYTiwAm",
  "key18": "iShp6LMcVM4ZMfsC1249D1LDVP6NsScqy5ZmJx65awggHt1HjUF8CSfqRNwYtEzzvy8xrgPKcZWVjDatoKXj5dB",
  "key19": "4eZq1oFZ2LKko6WBPzhJH5zQAwazH9eZstkE7P4ehAjbAzwBESxaseuRNWUwb5WFvHbLgJNzGKqb9TwcFMWRDVjH",
  "key20": "523iaaSmSgNVzKpcWArM4pFBb3g35wqZHTWUaoX8SwXhJeEJBCwRxVyfDHGUTPx6PUNMdCknFoTmUJjniydNdueC",
  "key21": "381A4PZZgNW2dPADiYQa8KgXhD3awGSv9tQxyxGiRFAFTXbwp1UGWX7V4Vr1Ld9zRQG8BSbc86txFp1bVFFajUuC",
  "key22": "2UNQ9CRhHmA1tfifMuFjt8Eb1sKDdYsQ3Lwqp1ATzeWL5UCARS59nuGZQpX6A1EcdbXawdWkrJmhCka47PeDs8wL",
  "key23": "28GHbgF8YFUAKSWjoK3oQZHN2Lrg5HwFmVdB97ufYYtJYp2etyh3ELcqrhPSXsvs784ALNTUxDHUWUrkyb3rJDGg",
  "key24": "4J7boH9bpmonUDWvgW3xmtFqmENY8vp9jNBU4co1H5tkD5Zd3p8Zyrw71dMnRsgWb4TqGVFY4ypabTPCTackXfG7",
  "key25": "3iUY7y212eyUPEHhDph19tCPfgv4sQ5pkZiSk9vnZX4Fipm22ZqVcmoqZPSWLYc7XkD9Ud8h5HmD9dgCj7UxoZ6z",
  "key26": "39sxM2N4E2SXpRCYQrDR2MY5GnzDJjg3vASeDdSu9YzARbW32HswaChhsuXdTMdL3nP3z7yvRsZBWK79tdVzqnEQ",
  "key27": "4NVpsLq6AJupxhCDjbazDSmJSKoUAX8fZkrHbe2dkmcnV6yLZ8udhAk79avu26YeaShjy9pe2Vpv2jvUvgWgBLLA",
  "key28": "5VEqy8JGLfkiXGg11WvsvpAWDqr7sjPg32R2owfwL9jGr1HgtybaZirAifSioyxF4JW9UcTMZagy4HfkBhMy6mYE",
  "key29": "Jam2v7dy7iojcmEmgEhQJz3DW5G4zRedbQyt6BkMfd3FMFTSEgZHKoK6BWdpqUY1jf6xnNxTHT8w3zWDPbBnM8R",
  "key30": "5fUis2SzMz2uxTGj3oQ197YKciSwbs7e3vuwRQozhzeMNLeZrtkFcXe9MrDPUhPyB1B8Go1KJ6dHSUMaHk7B766q",
  "key31": "4Puczx4tkrqhULC1DFcWqVF269F3B8SBVzLvyGSps3K8s7czWLXVW1cJPfUEUZwQPfK4am9Yr5R3yDGzCxJbud5g",
  "key32": "3XTu5wP7czuHebBVoGFXhZ6dHkB8gacTzrxzgweGzp9KoGgHkHW1yYCpf7W2W72S5teAEzof9VF8H1W4A2Zszjcz",
  "key33": "3piqAUXjVYpG8wD9Z7EViRcSmksUG82y8ZkgMoAkgygv7M1gpMY2JcDUgv4QQAHnYScQJg3gnK748vUPL9VxuFKp",
  "key34": "42MYxRPfPfFdi1XFyp71gisr3HGuxSPwf9LtQbX11zBAzGdaGw6pSvhGYYHfXdvNU392e4U5RfdLwL6bgVtuSumf",
  "key35": "329T8NJ3joW7Uj4MtBMZqBBCDDnSSGxL95Bfxb3mPGmrJYphazRvJQXNs5nRjbJqnyq2992NN61DfBUy8tKaJ5ba",
  "key36": "2HkuMez6ukPHzXxhDSENRp7qBEAcE5D6KDLti9fUPE7qh7zgyiZ47WTxMAHk49RSMwkKDD3GJJGs8TTnhHK6rjk8",
  "key37": "64YxdN5BB7SGXFr58NuHA6dHnMVcLhLoUknQkkWNPDoPVfpaKuoxCBmMGQCpgwYfxUX9r3KHWXcmGsveJ5VXcFcR",
  "key38": "3p8kkLsAqn12DBngVNRd9cSgFKWgFHzvq8LPeNwu6nwRnf2rqvJnR9bnfeUTEsEU5m7brKabB5uhW3YDoSTiPaQe",
  "key39": "65qNapvWvFvV4onwWpknAPtNWMab4yfyZvjFZynkYfn9tcoUxGmLKTiJsDt7bB8JJJ8yKoh6enaGRDns54CowT4U",
  "key40": "4bGM8Xj7XYHNGPYm3Mf8Pn4uXpgHGmf4smToRnN8pGGLvo1ohx8A7eY67thEponf2yAbKWY7yknpq9YPyVJtnZ7c",
  "key41": "5GZNNPuStXq5KLGEKXLfa1MMSMD76BMEpEFhD1gUVQDe2fwzJeDqweT8SzwuXFzXd2Cj1RYEsHbhaYzPnPNg8yut",
  "key42": "W4i3Pcu9eCrB6134UHVVKF8CeFeZ3YTBsTuiJThWWgx49Tf8dxdiqFDPo92vtEsTevmB3PbUVAB1qJ3UGDxKQMd",
  "key43": "2kfAtxv5XaUZKhV1PuLriZcTUWpLgPJy8a4pdD1DYpJkyKTbuvEdMBtMEhcQaXxShLdtEocmBbGxQFBj1ghF2G3W",
  "key44": "5RGcLoX2tzc7tpVkxiRa9pBLziNtoetwnu5j84WpKqZmnZFMuskaWPrrZRHJqnXmAZxoRGZxbq98PTe9sopi7DK7",
  "key45": "UsWJX6PUzAfhwDaDmQeZohQ3k6ieoGoJGdyvn6GXzmPMsdT4JsvWxytMArd3jvvS1L95awushi2hMZvfDDEZzXn",
  "key46": "4bSYUkvRGNSe4uJekfRNrBthwgS2nPdFTWQS7y2u9tPFyaFmvC6Ympmc9wtQ1hwtVRMEWGYSqj5g3XNh8JTCj7uj"
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
