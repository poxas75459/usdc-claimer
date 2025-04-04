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
    "2VaiA3fREvoHmd9mfa4UfTbabZPTNtpCppe1puuo9nz55AMrGwoiH3fyET4uvPU6wAsndEszaydix3vLaSpcUBvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NNUZbiQd6JfUZwMbqWGexf74g4DDbrJiEhQSbZ4ZXmxXzKyJmaszf3fQZQBrjLYyPAAf1XzT9ktSsbGBvvkGvAk",
  "key1": "5rnkKAGj4pq8izvzghix9Mkn2TQuNnkzX8PsR4V5FxepEEAMFgE6So2jySa5wPXF1KAbVwE1VyE1AFXrMrQhpDuC",
  "key2": "54nnakLnBE8RmRZKhThHBf3q9fGMfRy5Wfb1YS2hX47TcWZPPpmU6oKLkR2AvpHGgMN67fMYLBTSa1kWV8dYdfhu",
  "key3": "6BU22QHtkrCGrqR5AXvE4dYWmMhE3BgRGo2Yaq8CbVkQqLvmGc6VCaPLdW2zm2fBhAZ5PqcSUJoShdhVGy44pek",
  "key4": "5K5L8cHS1WUP8jUmp8PJPS5V5WVyAqmARyfC1ZPMWGuwB572MzhnXEjaQdxcuVwvDTGFW3HKQKa3YC4zbnDxVbZH",
  "key5": "3Mimj6xmik7NStjtPmU6mDVAYWY4ZX9DdYwYNBsE83B7MPd7agfoJ2BAnUX21qaXE6SvW5v5rwRkjkYR5BSA4w4",
  "key6": "2kzaiPFNChSP4xPPviRJeeWuL1vmKT3xnQbTUBZSBhS9u6Tt6YWroMXDD983Ntn5iWpYaaPoQ7aip66BXb7McJHu",
  "key7": "4EbFT9pUTPVE5E4m3cVtohEy2Dofw721ATMoynZQCMYPZpvrR8D58puQ5esm2cy7Qot6Arq7in8QCuEF2bF12gbC",
  "key8": "5tb9jm3ZaVVXoSyvJhcSePPbTnSEa1nvbdbE7xkXbhVctiq3F3s8vTc6rKYreqkjrZq8NQhWYYLo6e9hc8M2spVZ",
  "key9": "2qvXfs3DD5kFrFicXDWCHWPEytiWsmWas9Wb7WrsRBijJ7X4proKqood44LDLhpdfztypNp2EY5g7pvazANe785z",
  "key10": "5Los9FcLEwpjof72d69fK2zjKbxf1K1Y1mnLn1wH84k4kzpsdJ3EJz9PcQBQP7sBvotHichgTqVzDpbpF3cELxGe",
  "key11": "4KsgLJ7BsPyTiLVH6RmqnxuUDU7gqdihmMSfKiRrYU6HHNPz1G1YsZsz1ZvwBBftKnbMvCS1sbhJmrwuwRxNyANP",
  "key12": "2TZP9QE4q38j4kEubJHkBwMT5b3hfZ7AqkiBwHWn51FrVRbh9pghyV1o7xfYqb9UMH7tm3P67LYNGFpzpBZPHyyu",
  "key13": "Jd148qySgPQo4ehyhE7cQSjCxLVyBEwMH5Cu4tRQ8bJ61TCjiEHUwvuxJtgeV2YgWf6TTRwQKLHY3Ky611Xg2em",
  "key14": "4zgFqtUmD5pw72K2hMZ3qNeVsWnNKkWKPiNDEwknMc1WRX4KXPMVaJLk1ZCBqVFJhv6Kqptb2HE8qmDoZqofdXcr",
  "key15": "sY86xCNxbETyHKUsk29d9nfWiXegAqN6Fh6QCpEDk67w7CMNrAyPJKgS5L7ZUpikajTy7o3b5FMEJH38kNP8fjP",
  "key16": "4JdF6i4mJKcAgD49u12Kf5yNKonSGSzEqdFUPWUBfahyUSwrZwUDquaeXAYaZud2nRWU1zNEDS38HFjfPJy1e2h2",
  "key17": "3t2zJBB1inWwoa8uzamCtSCRsUWq5h9Z8QejYBrTbDb5bau5Fo4hV2bR98teCrSy6srA7sJnfWDbh66TmAkvB1eS",
  "key18": "35p2u7Mjn58SGdATVRqa7UkeaYue4gJtp9qG66kTBJGSGJzvk3FaQthuda6RRtnLoTzXKk31VWrQW7ApdDdsM6fP",
  "key19": "3g9t91MuUvJE82L9GftL4jd6zMm12fKbTg1TG16RDJiS3yxkotEpeQb8LQZcG2kggXeceLFuNhtpXFy4bFeGZYWw",
  "key20": "4kPTQzUTwWhFt6uUCGnXHGseFukmqAyDXr8Z4r8G3S1jgmeYTsFP7ivkGLq4EqtHgbDLksaCbs41GdDsWbg8vtCb",
  "key21": "3wYviH84FrwWv3ch9x4pZUzJJoNqTt28sT9QginQR9615B8f9WRu24oYDhUVpAJjWiTihA4FgNkPnNXofyytdYVt",
  "key22": "54F3iiUuGyLxWk81UuUNKva1fjM8JtFdNCKbsnWqci12txQesvNP6MiaqN23Zu2B9hzQzngQbse65UaGo8RrQD69",
  "key23": "2NwxjesD35zVQRqDLtyAKmuKwZ6WkJvx3iArfiLe43Kdcn1mXxCQjZNhQnMeg4yYYbg9dR5nUYDXx7qtTKaxoALJ",
  "key24": "4Ahk9Z3mfVsRvTVRhp3vBP37UuAEtMCdiW1LGhLXqUTEtr3qtUNywLTvri88iinRPpyL2A57JrSHzRnkCU7yFLEk",
  "key25": "2M4Y5tdJ9prmfqQaQGSN417UYFrfrzRJkGuDCqMnh1rCjH2Hb5qF5o4A2fV4kMHg4Ezdo3hQm8pttJhav7ZcuSLo",
  "key26": "3FbghjFLbfGwQDR7RM2k6EH7KKgUbPdAFMhN4kYbSvJudrSA2MzqyNcn9NVuwDpFJ7YrZGqkv61UD2WrawwBYdAU",
  "key27": "jEnGEREfv5woAL6PsRfTxhG2sv6QMyaiUzT6Ub2SfyQioG83N1f3BV4Nksg3Nmrz1FRAvmiEfDzvzenficmEmPE",
  "key28": "S47akfUcgz74MkXj7VPxB8SbcikhbBt95FfuxGRhYKRHD8VyRLjs2zJywFAGiZjAxJDvQLpyxcywpz89FMBWhaf",
  "key29": "5aeE6PkrvNAje8UmWbPfAs5Kr8aTyNf2M1hDFwXSqWSb6FY4Ns4BCwDRnPmFE419Th4Nn5m5EFRzg2yApVcUzzVK",
  "key30": "4hCAKLXnkT8XogMYhZmuW5GBG7LoYVDnwcfXfRWUjjs8DBjkTJEc7H9DKkn2GLX2gqCDtfNNfuvoiwodPTw5Vcb6",
  "key31": "4a6eqyBDeonMNgRBF3QeWHcGAp6PUDCjx6CZjym39i9WC5hTEFpy7cCCLXf5m5t8WyVXYyoyfuon3AnUjVxofTCQ",
  "key32": "3sLGkoRFv6mWSL6Ek7VNhC8FhbN2YwRkivk6aXhpKipLXpUjMwVKAfpCmRR3jkiZELUdsqED2dw6Dtvokdz95G2Z",
  "key33": "3SEFPKoZJNRjNKDuAvYgbiPm92SGnQ5CHg7Qkvdy1c8GWHZzxBuGHJEE2nFeGQiMv1Vgb5dohZh39Fv4Gkc4WQFr",
  "key34": "FMp8x8tdYRf4j8efA2raegiopjmaStA43EkFUSJAwhyUVBaTtAcZ9c4Z2BeAbjBQ1CQvsTSp7uhX41GwJom4kar",
  "key35": "2aq4cyAbHdtaqruFPsm2QbaM8m3BzSy9kiCXxJCtyydS7TGXT9M8uAtW6UWNMwiwDegZbUZD9QHp9YNMf2LfQfYZ",
  "key36": "2iDmhA1nKT1otps9oUvvW3VPffdqbBaMawqh5UEtE29gMaTNC5o1WjHNj2sf2e3XsVhh94PUEEae4gwaiaMpzkym",
  "key37": "56xy2MpSht1aHMwKScJB9ypDa1oByP1TS1MgDK7PF3zm5YCMTzyM7YVHVPWxv97UTqRj9xBoh5JBE8qMTZ8wSbdn",
  "key38": "2xNa7B4ouRDm5N21BVJS7W7ae52616inu7zpybv1WWYrhKcwnZTCpLDnjMA1oSjA7Aw4gFJ36emyDHNvbtSE91KN",
  "key39": "5oZf6bB1MGkGwBDfu8qnjfjzsqwWaBADFViTrWArmzUQn4kkJKXvgunopGx5GQcqtsrFe6YwqkCGE8kmRsWqQue2",
  "key40": "2xw47MCNRve3XDdZz42zKutnMst7X1cdzDzFKVQcJDY1vMkX1b3RghrQgi1fqoJX7aQv5jcb3qLEDKDpm4zXmDBq",
  "key41": "4yR6PRjFTz5Zx8rhYpcWK5PNwxSoxhYi52BXedZcTM8MLLVFhXHMJUaNzvjfTvKoM9CPbTxYvisL6vBQjWwekHdH"
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
