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
    "3uPnGymoTrh52VMeLzM3KZxaxmsgANpFLWetSHYu1bSXvie4fFnbAzgTUCC7cDoM4ntLhjReUFvE7P6M3sKgD4uL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bfsyn9czDgfgdhwMayKJFDp8j1jyDq4BL5L1gTJ5enKXssGKffCNc2nG33W4iA2RAQ21ntFBvGoUKngvGH2nVhV",
  "key1": "39sHff3adecFLQHH7JBQJy8zzFqaFKSgnqvP1k3qCk2ScFmy7BafVWMGbekp2iVnN1qTE5VM5RhNXSCijUMGi4QW",
  "key2": "2Vex6xz2xYYX71cH497J3b5WPLJSNnLADRJnWPTYAR6x8fqWbbfmLw4fDqmqbQh2WfjvHZTs2iXHCtLDNpBJUMNv",
  "key3": "2qq9STtFQ62rULuvBxzVGbkwhAKxrAQL978tbBYvPDHTiFswpAPrA1WCY2TnYX9kdzDmbn85kxRPrARcd7ZbAmcT",
  "key4": "64LwGStNKJ9uLwkjGe5m7jabpgK9P6WmrCrf65LnwNnH4iQrsyFw7y5xBUL5iMjYqmppsGbr9gc7GbUFPd418c3j",
  "key5": "ek8EDZiCr7T6QWSz4Zj4RVY6HPWT3JWyMQpoNetW285kZNxkQHeZT5mLF4L93sUqieqvTp8qLZdux3BfVhwt7Jd",
  "key6": "2G7WNfymBPyAeyisadnikYUsp3tBjxAXYbtTq3Nah5JQxrCH9QwiypTQn1o7cTjRm4m4QnPyvY5HbgNP85BgZLSE",
  "key7": "54ZjFGjKFC4VuGrorriLBceiHnzv2AHtqTW2DyMcozhGEYivvRDEudkSd7eyzaNgHqhHiTvfNKPZRhjuyoeBv1CE",
  "key8": "3iRaAKKpZuceV53SA4AU9FdrRzjmAmjMkPomYgzgDEe6XTew7CWbeubEqdQc1Szxm7SLtGhGUCtT8Q6qeW1J12KC",
  "key9": "51aVxgAmqYvpWHj1qGzJAciL82E6memHkexBJiSby1EQwPzRVhuyMzPNPwL6Z5Bm56mdcCyixERiqARsBaTcF1De",
  "key10": "266oTETT2UVVFoTzn5yodR4MSj4kjhesaYdi7oVesXvk2c6SiXJQMaiifrLZJaQpX5L6ruXvZYSrXzktjrSeRmPf",
  "key11": "5Et9AC8K74YZ8aunEAbzznPz5YTdqCxUfHo3Bkd1TvYRMC2XieTgrHh2V32QrR1WttRADEU4Ck3wVMuU2wd2ekdo",
  "key12": "3Wj4TkY6Gr28yEjkTysksAhv3acTeFwXJumyusaAMJg97VdBAiApR5ZpweQ8WRUbA9Z5vXKTBDYhDSmjE5zNdAmW",
  "key13": "3a2dD6QfzhiZgAZrtuotmdpyj4kZCaQpu3ysQPApo6r4aubGnsEXCiSysLu7zLxKrK1E3GVB76VTpHfPxo8PR1Fv",
  "key14": "4hv5izjU6NeDr84x2VKf1UpteUy3KTicmf2cZp5ZdLhoMC8ggAgjfGoeoSnpHV8bf5QKEHiCy2E971hbbNhC9CHF",
  "key15": "2nobGm7C1VnMVZqpzzr4GyjHxiZMpUbGbAiP5Z4hAR8B4jcASi5VPkSg9zcY7Zf1EYmtVdu3DTJY4oLvGSNEUWvw",
  "key16": "FVE9omQSPTs1uAnyQsk7b7QZY4cUFt7m1wygXt37cqpzPqVEJUw5pETBAtufaqRBHHMABsszM7KxSJskMuRGydw",
  "key17": "4tP1QpbxoMnGjwQGAeZ7ZVvZ5G4XzDUTggPGj71QPqnDHYqkwoipntGUBnEkBDAt9XadCxMTaTa75x1nXBn5NV6X",
  "key18": "3JzvY8VB97CtZGhYhtNJMw3vB2MTwEUGGAdMz9gMUPKqADtCEF8aamk6xqzebn7CXYKn36Q9XhFDeRPfJ2xoWBza",
  "key19": "54efccytoPVrXrb5maVgknk1UwkGRD4897kD8b8s6spuFEw5GQPkSXqAcxvCHFD2KavDhM8hWzNg4PGh7zpyMqt5",
  "key20": "3NkXz32YgTdEDiayTz9eMmYXwHzAmLcyMb1Pcd4bqf5GgvJ2Lbzmx4YkASQh29QyyPLdTAxxkaXrHZCZnmuRB2dx",
  "key21": "4XZp6JVPBs7wp8iUrATxqdjRyWYgkiXW26gXX8hj2rwHbWxcyS4UvBwM2wKsszfSfZ1vWyTykFtPJg5pZbVWMTBG",
  "key22": "3wKtqo7fEWrv5sQetPuDG8BSEkpmj3arzcY1FX9bEM8hdGGPaewxzQCzS9zREwPs6rCuDAMVnRVAhen3QkUbeWTi",
  "key23": "2CxvhB68HmYhDCK328Dd5joayZdjEh3kRhkJvkdAdNHrK8zhhA9UbfeuBcrg6zFjCB3PsHi2agLcyZtgsM4KyaEJ",
  "key24": "23x6W49Rf9LKBT7N7uRCVoynusJJpAmjGmRJBpRojVQQRCe1WH8xndatWKMsGFZggfaoA2reL51mouJ7LJBjTqQ9",
  "key25": "45dn3iEULuULSbLojVvLxMcZUfVD1wzCeYvj56jLP959YaWbuEoh3mUWcYuaDYa7HARKwSPDgzGC7yYME7RFwe3u",
  "key26": "YLKfonhLocJy1GZ7qVaegYpsouHMJ4CjEPat213BHwiCPvTXgNaSRbm2tE84TZonagHkpGbZ7apNbFhN3p1oq5R",
  "key27": "KaidaezV2A1ToWgreYHWZxS9qX6A2NyWTNC99feLZTeJ2jVh5kkyCvnAjtTCFhCANdbDxb1bnu4pzpsqtfjEW8H",
  "key28": "VVDjQgXqAsvMFi9bFfS8EZrVPdkTLqBrR2XtJYCeBhtYjhN2TndPdmvUqDw3EaoRdqtN46J5ocBCoJAGDUZxQyp",
  "key29": "5qLfkQDqSmny2L7ZPqzZm3UuY3MMsPT1ia8sabP8pnS4N62hsCQ1SsCLavAQyjdMSEexhenSTinfqC4pwhLC5dN2",
  "key30": "3g7JGf4VP4Hp7z1JKQkbVCTTachwk7cupdexyHYK4pYoceK77x3nfcdn4JW1mjXeDQ9PKnJ3XCoYkFgZQmSe8gBi",
  "key31": "2kroDAoSBbwAXxb66fEtCxyGLWiZMc2SPAnNmnwD5st2ZQzsFahFrE5DJTEco6j4Xqn5fDwaHHArGHkLXMD3zCna",
  "key32": "4XgEQEXx9Xzt92NyfNyNxfdWS5k19YjgCDZWAFpdDUXh4ZA234TKDj3pWv3STpi2PsSvtQR7iQ9hK5jn5FyG4eN9",
  "key33": "2EQPkMNhcD1NVWKhU7yh6CcQeBz2LFx1mDsVkduwzJqjQLXpwSPNVfzaou6GwNBXMLMXhjLKwrTdjPAqciYiTYQt",
  "key34": "4TuUkR5nkqhG7TCpEDXE3GkBpwDgMtvXJZbaLs7ZyJz3CvdB8Bvfw8TdzXHQH64szGzQVNg76LHNJToVwjuQk3KH",
  "key35": "2QqA2ECxA3gzLknPACFRjLCKZzXDQZKW1XoMXYYYTg1ECAaTGLuWakA9JKQgmE2yQj8VT8Vvx7QEwcDch3Ucaa1H",
  "key36": "3VzeCj9ekm4LWBVAxg6dKQhURQwZmyUJfWqp5KiTwxpG7Ty6bDkppRkE7jLPjWqd7U1nPBYgxAJqvygCQprLbbSC",
  "key37": "5rBqLKLczQbTs1V3giA9vVnRf7ofVmDB2UjwVom7d9AeyTQyMxQiksXi8zBYKqPs7oDCysR6h3ceAX8KrobEXdjn",
  "key38": "4HCktAo9UFyqCShzBvtZva4Vv5KdSYjV2FvW9VU5vDeu4JF7V2A5ncPwHnTRpkqCwANuQUVa555Scpf69AJyNLNN",
  "key39": "2Ue2FsiVfreV9UTaYUrAyt8sgHKaCd89iHKfxba9x5MsVPgeJqkcqeqPeAyADfx5aNPDepLG6JWsX6mKULRkL1CK",
  "key40": "3MpRT3u9A1JLE9z6QEWvP179i4yTsKNZ8ZdigZnDM7EqwePQWAaAYmm3VyFXQXQgB6sPZn2pcbG5gntNFsnLXNaA",
  "key41": "4wzCxW3faREU1NQh62VifRGcgP1pQHecsrn7T2gbVpSswaAqR9GStMa4dUAqGdomm3VacgoxWBExMghnqMoeUFdz",
  "key42": "51ucEyjvS2XU2XTjEFf5soKyhDDeQyipyd1PEuWhxQWnBPsiW2riRnxvbwFb92p3MyDpggJQ8sPhU9c3ib6G1Zcu"
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
