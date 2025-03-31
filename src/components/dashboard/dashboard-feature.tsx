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
    "4nwv1TvdJVNnM1bC7XDhhzSD13GKhK7Rr7rZtJJeR1uRiU1j1XycJefKJNs3Ln3pLAhRLJ2RXzwsz2R9mrtqU42q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YDxwwGK1qQaAA45sX47PysMB7B3wQajXy2fr1roFZn8CTBAUPiTqNTQRJBoZejUjt6DuStFi4vmVKXbghTb79Qe",
  "key1": "3RwnmqGAnyMg5yL2A4421TF55c23t5yQTcoz6HqYVdTs3LR34AG1yXiFpGcCCmYWUxES7xGbG46EPbuf2FweRuts",
  "key2": "onK3kFCSVk9wEbeGgKH6hM24FoqZRKD3AJ7ebRQp2sdBEfV6DZUnwLGzmJ45ieURwAbLtfo6aVV591vJrY8cBGa",
  "key3": "2G1yc7sYsrFP71Ab3KZuWUXHhrqJSnwGoJvBgqp4wB9fbESHt4HGJR4qSZxaH1tYinHsXZr7w1oUsG3oKinwqbpm",
  "key4": "47GgLVd7DZcAdzrXqqb8ofsrzGJNnNA5RXUDRbJCofKoAUr7gUUzUqPy1EchegPVaCzJ9F9jXDbk5jWKSwodLXS1",
  "key5": "Lf9HsXEabyuMFPkKrvggb1P3GRB9bXoP4tZq7i3UEY5hjKBGk6Dgb9icCisr78uX9PEHG9eVWGqv74ZJEYyBRth",
  "key6": "3Kgga5ToADESgVroVbqRht9FPXMEHzDG8F9NiWU55fvKun9NU6TaYu67nNxNqFgx1rTE73X7sJYDX5HeKctxpAoK",
  "key7": "5JKR4NU8F3jRU5t7yfVi2d6FiAgJ5CBN951nFsfWSKa6A38u4FMmaMsJV4ndHvcg4Bxi9FeSWdyWpwXP97Tfmqmq",
  "key8": "HEjWnR2sJubLPNEKwv7pPLxN6Vz9MjkH6HjucQ46doBtPb7zCioxHX4afg1KJzauMDpMMz6uNVZdM9sTj49vXFp",
  "key9": "3yRs52zPtBNjSDHkibJApfwVNKK7jiQ6EDdTBSwWqGSnnfL3ys9ofz2eYpKvGixeM17RSYcGfsCMzjR4DNVdwNHF",
  "key10": "ET6SHf4nLFuBXLoDMuMoyrgU1tzetCtnVmarvZfmoHc5bPf45DR3GD46e8LrFpETeMGWdBndY7yNQydA76bah2i",
  "key11": "2Xhpn5Si2gqMi9qMdnZi4deiCzb5RwCfYNwrymPhJxraGJqTPqvZbk9eR8gvUWx81FLNbMvkD4gB7PWPg5wk4rXY",
  "key12": "45dEnnauCU96taZLBjLnEf6y2atqZCNvLA9DU729NCpC3TSJodh2uijDHHJDGcXAhMjFnYe9Hfv4761a7x1APVxq",
  "key13": "5XQJySE4RBjaZNB5Y12aBnf6mEsDvuxwFvemJv1dn2sSBddJpLqu6A6bQ6b9rQsU6nPYmfbZMC2p1N17oDzdBKkm",
  "key14": "rL8kR5feohAbpCW7U51dXWoskfXW3woA9oJEYM6WWqG4o8XuSxVav2xBMTvwwPyExcECDymuXdsoPET73bgiQYe",
  "key15": "61rGAHhAustkzwzRQ3kdxherstJfz9e7rvuWPqwM9pguyFT69TpseEHtrDCBWi7HGf2WpiAnCEr8kivfi6ZVLyv9",
  "key16": "4CiEGFywmQF4mdhnJA1V9DFRH7U1Mi82TNAt5vLS41xVy1PSLyybK8Uco5dL6n2y9yv74KrGjNSMJPE66r5hczsH",
  "key17": "3vCm1TBYpZPhemXXn47PE35AP99NBjWoeSw9Ro8nsdfQXZHSrtkRpYXbPRjVdX7fyg5bbykaZUTuLoQcfbpDw5DH",
  "key18": "3p3K4mjqfJ5tqGEP2PrK2ytPuRxtdL759ekKVFpMXArR61WAtHhvJa9kMehxCVP31rxWsTnC8N2BugMWJ93GJsGE",
  "key19": "1AfQyoZi4HEK3yiEmdEkF9fUNExt1yqYTfPeodSBEHhEsrJNTLbupE6ucDp4Bgx3oEG2qpaF7tA3keA3eCkpYQd",
  "key20": "4Wum341ocjko34JkKvnW9FypYPwNiAcNsZLPeH3pfEppXdEnxVB68bPz7m5b9VHTAUSUsquow1qeh9GA7TKkfaMw",
  "key21": "dxYV13GCp9n7a8UcmMmvCEuNoDTLdNq2xnf6QZVoAHkBxmwFx79ark96pQKCs5GqmASEKEDi7C5BamkDx5uevm9",
  "key22": "3Sgd8oHhmBCHgYP4X2yfEWCLa3zkkQTMzEu5h62ywT8YCWdx1iT8FZFeeRJt2hjf6BCovmxjbVhqqnKSNXFYFaHa",
  "key23": "4hZdLvdBT6aupWLYNqWboXMMkm93VK1ExjYCbNPY2LpHpqRDR4ZEsaT3xCqR8u4FpZmmyzhtgNUjzswWCsEn7vw7",
  "key24": "3fqFGQveJg93CFSzfukRf12zTTaMTzgjhuzqq83orB8Jz2DNs6h4AjX8MUSuSx5MYsvMij3z6cCEqsiykmSziKyw",
  "key25": "3e5D6oGbX2j2JvPbD523De3jSFGpZUVVnvXwuJYrCARk8ELDzR7uEibjs5ob7dvxWotCZYWSW86QCSRN3UTa46r1",
  "key26": "4W1C6C5XsrQYU6TGTGsjDhbCV9rAoUQGrpZt2RSifxzexvMprEGJYW9Pbi5jq4gRwfk1umCXNrQV6XwUQgqD1bkD",
  "key27": "5gCuq2Uv6FbGjKKeNz7Lmvm8YruNY44Z4uiGc7PcK7c61E1pCAnemsadDxvTHsg3K2oEmpLBuRPjpyqKZXx5E91R",
  "key28": "5SucmjfLrVEieUQctnHbLV4T5wUZkkNRCLyuJwb4WXpr7h4pm8sCobkWSZVUxYbK4zs35CrLjhwS3dh28GTzLoiB",
  "key29": "2n4ADnA2aPqN25DRQQWRci1qrpfNXhytABCbxG4XbTUwD6upMyp3uTvDTotaCaiiBKbYXeiQPMbGBNHnzxRw7eG1",
  "key30": "MoHViBuguG7VmEufgC78nkHzLvgjjRTJ6QHJViGTXhJDA1iiqmrMGJh4rf9Zy9XrxpLNgziVA3TTu7PtqNdcVZM",
  "key31": "2B22ZDY2RBgbPYMSGDafgQwbvkFah5giR7UFwFH3vQW3vWjo1NotKGcc9x2BkicMHTwLeP4FPzRtCjGXrPVsqmKS",
  "key32": "2DuTibQhDRenJk9K3XAJdjpacwjU1sLo9JLFpNtyRZh77qHpGadKWtG8fevUY6qjPzdiSrSTiQZS3FWpzF7DXr9e",
  "key33": "4DyW3rYibwSAH6s6J8dTTuqVKAjy3hCeWv6sXog4Gsa9h5DT1msqrrPREYHyqZHjmiEuViRvNRRacTQ2HsTZ6q7X",
  "key34": "3MU7tX5W3B4cSrnhvRgREM9Lym3dSa1yhQLUkLj3rchVY5a7kzw4X6GSgceTYLQuBUq8P3D5QYvTmWJ1xbLBiDqB",
  "key35": "2cgzmt46MJp2gnth391zwFhq4M67gWprzQezxirZTzsSPvJ7krwyEiAo4U7HPXuqev1t9eJB2mFZvvfyU8u3K1in",
  "key36": "5tMte83AoN4rEVNofFigx81Jq3SaCNF63LYxhqAKAogJ5CiCjkp7QK9Jv3UDsFb4aEQcL1kSRGW8hvS8oGzLNkeb",
  "key37": "3SWXvc9KZL6rBthxG2t8yvtdReanXQKXMyox4y986wcZtLZNQEqtJzKQmTvVj8GAjfnpCjFmCAR6td288neG8TNn",
  "key38": "3EYrVWe8eUSMRwnvV33kz6wwZCPt2H2MNTyzjE7c7daVw9A8bPxQNF3VYubp3fyf816P3fVqBf1RroRW8npprMor",
  "key39": "5iTQbGeB1psEps4AGS6JHySDrH9EGo8ELY7yUH75oDrYXLmyav4CqgY2F7AJpyHKsszDi7sghMBVkuDfzpj4JEvJ",
  "key40": "3sxQTzBCkCU3XKRiADxfguTVpgDwpjjQpzjXnStAuL82kkoinfAPoy4sq2m4Tmhyk1XY9wvJZnnoRXGiiGqV5bWJ",
  "key41": "5sXg89npnmrvjgCGHnTgsN6dinGad86mUvrL9gGbW4ewzqUAnnHHMv3NkGVTxxB2ogmyUEEj7FaKEg7Zthg9WUCd",
  "key42": "4sfGozitQmyVWKjQiUb4MMuG9JSs69VtxbZ4FDDWHHjkoCbXqiw24M82pgzMFEMBBB7SEukgCTmbqXjjSwsRf23T",
  "key43": "4a9b1xfxMiBPfV5c1UiShNDHbFjoJxLwJR2pa2u46kWujeX3kvgzyDK7pEppgZMyiyHFDXoivueZefT3Yi7QhK45",
  "key44": "4xPsTsuJATyEBDpm1RbnzA4fuTacwKLTsJ1wAyoQ66Vw2rD4MEp55JL8pUPof78uJNj38gaDVaPX4spCZ5Sz2MVq",
  "key45": "3PgLANnX3Hw7kkgXzgiHDzKQTjyzdQRzMwtJYx7KmURW5tGG75AGtW7Q6ccjpbduSaBYwUU9ADfAiWR4iJhKHTqq",
  "key46": "SgaHYR3J2aMUDAXTC4McB6McqoZtUyQs5trxNCH2yoJnt347AvsoYiK4yP43ajpjnDTTQXzY6iVyrKYYkC7Azne",
  "key47": "3tqc7Rh6rXVrtSRMdRS9DD4kDdotqZ5L1hzU93MT5ht4jZfkZsfwoW4SvEEbqY43e1LmCxWqnhTe8HwYv15Dk9cm",
  "key48": "2XhyNc5T7gRws6k2iy9Ngv4A7vN49qHGGKPgSjrgY6u8yBfP3tKhhgveMBeN3SALYEFJiBuhZLmojDuupvaarFZJ",
  "key49": "bVo2Gcf2TRLMzLSdVLHrHAD1LHWqWTsT1Xi8eAw9yNzSqnixh47GYxfJMA8mGpLefZLYLjebKCeLnLL5uJxR65Y"
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
