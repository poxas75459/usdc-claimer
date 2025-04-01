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
    "5wawmeWnqxkwjCCwYLpZBSPF9Fwd6kiF2tryyiyQsDUMN4HQKvmf36QSXFFAqLndZ5JUqHLTk2UxMeB2JEECC3Hd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dHP4nY859UZR7pvbCYseDvvcQge4CMK3578HdcAfDFbM1KDcLDTrd9wgMgWHH1iXDBL7z2sHEjRDn1HqESshHXQ",
  "key1": "4QQiFhUKvJM6mgDcnR4j2EVP9KuYfUV3kkNd8peWyvRLpzFqnUtTFTLWJ1qPDdLKHfPbXf6TpCHGkYpDZ5AJvzwU",
  "key2": "2PTXay6ahpGgWtkRDnjddutXvf1ZiWWePsiwsMcc5DENPVtSud2S1ykafZAt3YbPySDA2EML1fCmBfuR6pz86fAK",
  "key3": "2xWqpjgY36yBiACq5XtCRPoUdLkqMFUWsFtJovar1A6AxqnrbPNoYf5hnPFnRZJ9Y5YppnsM2Qiak2RTUsujtPML",
  "key4": "2Nd9ZD2g5gqCR4HpnCvzVmU3xF7p7LnEJwKayU82UZ87eMnNeGvqhXq6ZbywVNuFMe764EMxa7kHDZhzXSaCZDQN",
  "key5": "2ocJHG3VBmhaXGPCsz7PHiYqMmACD6WPAndR8qmipa8WN27u8LJC9qTpWaWS36JoBhduT4LTfbGHiiNkYFQkfdMi",
  "key6": "3y8ed6pehutUzJNQBCfAAfDxGkLEsc5mZza5dwKvXZp96QfFFBmjBXTDoWJBa857UZTNcXVmqk6EwK1WF1m8nYFz",
  "key7": "586rE1LqLBxEeumzipAarUbgY2MVooYHoZAywfu4FNDukCv3fAioT6Gnpk8FNmTygUAFaETqLDP7A6pgszDVno7b",
  "key8": "2ihdFpkPKs4tqoanKkE2HjvmYTE5ByUWEWckEa6n2emoWshPP1z1a8JLATwebm4ryw7giJXDVzXZWV2eeRrGLGpM",
  "key9": "4sufLjYTuCkX7pMu27MhJXiB2G9YihBv5UdHHxg9sjnh1MJ9y2ibrxNP2TwU1WtowmedWZUBVjuwdrd9m7idGScC",
  "key10": "5mP5R3BXBWz3gPWP3UMCvcoj7TqaWFXRuZBPQx2P8ETDxxj1Qq6dzYdKKnzbT8qsXJUEs7G4QTkkDQ6ue9U5PsTH",
  "key11": "3K6zZ1gR4LtMMhP4oXv6M4aATxMjJzUUf1m2RDL81UsSrAYByD2G16KRjrrVGBqcPuCn8AFSpsvFPH1VSebi1ZL9",
  "key12": "4YaPSuNRiNj13o85kqa5tGqh9fKC4JUesCcbYoAcZhVsZyR1H9wcFufjNRthE6kMKBV2Xdbvsy6zEGH38jz6aQZS",
  "key13": "2y2u2Vf2pSxv7LNCvgrKaXVjtpdiM4x33bkss85oQicMftTV38gsGdPsfk6tEXQi3WMyPnh4Q5rSgTi4FX4H9Ppi",
  "key14": "56633JMWK6FNK1AMJ5x7tziJt1UcmjsSqvvzXWL7iGwGqf3mApUPSmtqjfUpCA7zm1H3KwA82NhvU1oM5EpoKa3t",
  "key15": "32dgaWS71bu5UkNYt4xLvgPrzvueYo6m4Gg91EnYK2Qie5dsLbFXqgGNWvVXG1GvSuUapVANT68ZwhUUQ9JchuZ4",
  "key16": "5J8soTDbyx5gK3dRWqEoMW979eKUS2seqxw1ACmCtfZZAEoXKVuRzyV6pnYSBySah4QR2EEkvmmyHicygLnU9WF7",
  "key17": "417a9zC4B4tT26wikdS1PJ4jFZcC56dxJ5Rgv3PPU3JgU7ziNoMh4WuXEE1HTNFqtfMY8Wh3muYgjnHa79th9t1N",
  "key18": "5QkVtUTFVM74r7S4gYAqugm2Znpsg6jAzqfLZ3DBS5VhjN3JMpgpDjqHizJ2iTHgWDBQ4fLzfSRfYGLrprL2wYRS",
  "key19": "2sq13SUkdstdoXc9ADaZhTcZSJgZX2dCoB83faHuqZeGrk26sbYDwRyM8fr16WavPRRzw4HVPfBhgCZPRDoUWtBX",
  "key20": "123vfWSZip1DJ4uuJcCtyDQnuYcfPcXD39CVEWTNfJ2KbWr39n879UfFby2r91YmmnVyR9G5JgCcHNsYgpEjo8gc",
  "key21": "2Lhr86jNHwnuHGBdDizhR6DLswt33KmooHAjcpgw72bct6EQtCKgnHvqd3qRGiuHE8xEnu2i6tUJJEVUmKTLBf4B",
  "key22": "2uZDFxTDgnojrLSnEfxYEL6kAphjrmaeYveFJbnPffqNt5u9HQzTrZShfjHKy6rtJRsvmPkKXp2xZUZbNkwqPsJi",
  "key23": "5HsBw6sJR59gtB7enJbY7ycUgcA5vEByBufphuswZfWb3wL652YxCSTK7oEsbeF3hbuQVWT7aifHTu69c9RYKMza",
  "key24": "2ydjs4GJo29Y4QBgW2xTBjXw1e9tbcBymrNsS2DrsiBX7ibcc8R7ZiKLu56cxzry7aujbiKswqS26yj9Q9CcCNhx",
  "key25": "2KtkjMecf8bVNu85J4nNr5fCY3CTWhRPwueP3ZbDESsWpmzurPRgNXoXxSAeFF2KPQTQLdQEJj6uCb4fwVDjbXvX",
  "key26": "4zhHV1UWJcqRYiwQgsZrcoNaLzs2J82ueHVNeEN89tBsUZ7ZABa96fCbHNB5rbiRmyE9QzKw6SCNyWfB6kcyTHc4",
  "key27": "34uFexC9WXkFvgjJGd2AaZ7WEq4FSBDG2SJ5E2yFgV7Nn1XqTyDwP1k5mgxW3zi3mwfYtMzA83miKFKcRe7o3R8s",
  "key28": "5nWKuH3G4svgfmvSS3DK6JYnr3SPaZBDDVHE5W3q6SpjRgHFm77XcSdM3ChBTuaQMCVy74XFZ2ibiMPGGXkSsmTh",
  "key29": "2ey2adwZHztHMqeQ9kfL8RiwagPQ8sXBJe3eqxFQdCX86ka3ygSYPZtjhuLxLBjGmSTWGqcnKFRCoQwKKh2QBwen",
  "key30": "2KoRFnBTuxukQo2mtm1iGygrXUzcbeshrURvmJTa1PoLMobWcL2sGPUxVCgoGXVd3sZX5KZNCsa6WdXAZPSuXrDM",
  "key31": "67KZf9FHu2Qc2vg2CoQSr7XsbmNX78aGJCpdkz6noJF9Jts3XeZJ126JHdNk38X5hzpir57tJtXsbaqMGrRuCV8j",
  "key32": "2jQBhMiqEGXacvEqgMtwqVsumemZnAgfMnQWDDbRbrrKLEt7aWtKTQS3qWTaFaF7wGHmTvQiE474uckEhdTD9Kwf",
  "key33": "LY1TFBYQcdjF2DQtBaern9yaHxCAAxtoYGcRRmZwxqLPW3ts4idJBt39xvQhyaEc9xgQxXqW8LrU9fXxuBwLgos",
  "key34": "4j9bqGiuM7jbzPn7VmXdfGv4Z37j86bhWiDKTr9a2mZq6SLearKexXajFY1u4QxtCreug5TW11twnPYbN3gjuoCU",
  "key35": "5w41iPzwXgmK39LyuniqFyvkJwrsf8nzpLgHVVoRmuz9icUMYiM9ejWuLjkX7xTsugg2cUQmooExKygqd9WMputx",
  "key36": "5JzoqYyG74zP7F4PEh3hbLk62aNMvqDLb2cCYsHWx2RhSYccfqiZAPdwp7DZLFuReDsW4R4xGP5hYcQuUJJxQUCQ",
  "key37": "4pTQMFhBCLwCACKuBS1vkFRnd5mwCpv5WFkKPGuU2tWKNkaT4uqroKqf2qmFfuumZVUcji5hVVpWqk8p6FHiFEcp",
  "key38": "58VYex7jA37HyerQsMDtBBd5NVoZuHRZWfftaQkFhA12me8AcRAbuqTstoPZbckvFdSS4qwAgNWoQYZooreBCkuL",
  "key39": "3HmbZabqL2Zv4s7cwNgsrEDRESkMU9Qgj9MxoLNVVSMk1akmoHzZ3FUH9aoDCNzsSwUDqgNjPEhJydkAZ4G7K6MK",
  "key40": "4NouBqYudL28qQLXrmNbcK3dd8gijgxMpGp84HWuoJ6WXKpNi9oS1j7MwKKsBZ49Ck5TmNcjLq2qzPF4Gpp99mR",
  "key41": "63EicrAYxb6vCZxjTWznSTFT4scTPccRrjegmp5gMsEHtninqFeVX7qbXDAka6b1PDhyp9YKNaZYvu6w6hrFcNVX",
  "key42": "2bN59mr7nzXeyDiTi1vZeMYpULwwUyJ875ruQZNAQpd2uFeYLV3MHXfm1y13njpEuE84BMqGMGg7J9PHfUaq4kCF",
  "key43": "4riUub2kDsGSxA99S8wrTgzrDT9VQT6E2H3mM5bnLw9hTD4wYsdSZwTAgptXYpJViiLWanVukTNR9esa7FFstFeN"
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
