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
    "tLw3722MwvXeKXpLg3yRs7h6fqde4QTCGJjxN1Esc9KvDBLkeaqbbG3d14JaGVoWtjpeTHZwSKWNehfd8pw6Uo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KjXrKvHqxaQAQhDH85Vt4Zpm4SinQpHr5hwGFNtzRYdpjCue9MsUt6jBGp8N7yD2Q2izqkHNEut8ESeBiyXVBzP",
  "key1": "4YjNzxj1Wnd7fF9K1UasJFCxujuBKGiWvZmGagNdNbRjWEYvHszcjRgeLv9yvoWeGf6Jwn2n7uFyAjJSkGE8JnT2",
  "key2": "5hVq1RDekfGZSTDoqZbRCEBYdtJMmEVWwtQqbEz227NFkxL92p4iDue3jzkEdJih2ZgCVjzrWnEu7JBzP1Nb5NoE",
  "key3": "5wFxyRPt5nVNm1N939Z7CRnpr4hsrH4eL4VJLZwxdU2iovgA4bE2Ut3bQAruHu8iiJgRbmMVqBNB9PjKQ1NQXNaw",
  "key4": "2tWmzehUWF7yBNoQX3VR1qH3wBYtuT1RMBQyVTUDaR8BWSm3vmmtEjdPbiddtpA6bPTwxkdcmhKdvZ4bAia7jX36",
  "key5": "2KAwD5NenxanyzduG69kebaWtdLrAEF7iQv251e6C49GnABNuKPHAYUXrhSJMsK2ameX21bbrRRVzfG6RZVN7mg",
  "key6": "43WzZb8PBhVV6k5RvDzPzYZAK3ZB9gygR9ukexL1U6iMpe6xXSfSudd4k6Utsbe5DbGDGL3xQysvQxPzPY4upao2",
  "key7": "2fRZkFwUUMWaYdzKKtmzghAuMNzGgKFrrbGXCeWpAJWzj2o24uEteDnDQAN6Vm6NpaEknWZj8paaEQdpA4m2yfFP",
  "key8": "4W2DpDiJggoXdPxHJCAuvLJke4EWdZx63VeW7X1kf28KxahbsFwUwf3sRFqLcRXFKbzzTJ2kYdXg4vtdTDqnCESp",
  "key9": "33TWaiDZAZB3FX3SHeEsxpmQPAAEm4toea8mAj4SH98Kp81H1NNLEqsTfCJXBzdMroQLSuKT2Rju8eq3415dUVQr",
  "key10": "2fbknjacmdveW8f8aCcc48QiM5Sz8zU4JCccY5tJ5PmActpJDgWk3DhLtasL2z6v2t8UWgWjYAePC4PKeTSnfVE8",
  "key11": "3prQtw2eXxKRCmEqdVNp52ThHKDLePhqJDsNmqA92EfaN6W3D5un3FcJ88awFuQTgQNW1jvJty4ATieJUGWq349S",
  "key12": "4NjjNFiv6eQaM2gLyfFR6oecSqddbZbGkCSNvCmWbUNfydKr1UsdrKNmGk8L3n7XWAGVHUFfNdYEiRNo2R18Kwdt",
  "key13": "3YuAQXS6pgi2Xs1X7uM7R1pG8t5LtQ67jya1Fyp4G745KNX1WYV3B3YZ6h1WUSpHUSvwyPNt3rH9TupAHm3Fyku8",
  "key14": "5ZwEkS4UZoms7srUixR6xcSTZmj58VTYUfymdkfph3Qk9f21TbNtpHNCg8DvLU9S8efGie6qqDqVLBHYJTnzY5H6",
  "key15": "4xcVG6MNLRgn4Uy8RRQESZDmcAG5h9jLeN7xbwV8JFXrL5yX7kciasukFZGXRSnrxLxHZHHx6beLGjCQYBB2PcUE",
  "key16": "23NArdU7AwPg9eqKJv3pGSq7MYTEs2P39bCS4ZKPseLWu2wG1gLE1fH9n81rEqe1JcKMEGYXFEjfNGh8nQrT43tr",
  "key17": "XBxPtv6g5mtDp8ff1JXpptgeZHP5fMt7dqWfJGRL25yaXRBknfMSG72zsNN2PpGAC8nwHXmiWSxXcDzrrPXcGA7",
  "key18": "T9qkgedXUaVAMU1ewPotJ4Y68zdXez2yuqCiv8NzWcjtcmo8fCU717QZo97s8RYpL7PGzsuyaFMUo9modrhMD8a",
  "key19": "uoQb4dDvzhXFBbRakGs6NPQ6uWrYts2VVi7Lho2Z8FBwyspyeAsRrDfFSkPV5fv6Xxe3z1Gnjkwog4BQdETeAeH",
  "key20": "v3DZvGFuqxgrfHJsx8gngfQg9U5u54xGBud5JyUpEUPjotwAi62znjHQGe1sLthu47E7Pwt9zMNKQ7cNPKWsrbW",
  "key21": "26DfTEVbuLRiXDqaFNawzEkuiwabQVaTAXja3HLLjh9G9fyeSeFT3aL5zMcB3dC1cMvneD6TmTHNym9r61TCt4t3",
  "key22": "3oUWkPDtG2ZaQd5WCNy2t6FMTcjEZoDHghh6KYXcYVXByFohtLv9spgFNCdV3gw4gxigxMjjRh3ZRnQdfVQsNHoP",
  "key23": "2nXDEYgti3aJf2hKRhPmDkz2xb61yaCZ5Vu5VmS91jYU8yRmwbJoqMbEj1S3RwW8z2TPuUgb5Rnm7UUHJRMnXRjR",
  "key24": "3BpoxFi7PmKXYKZcezuj7tNBMagf8styTo5SNU1vrYZmMhF5gq6VRGNJJ198vnjsLdevvGr3uLMmJEA8xiPADfU1",
  "key25": "53P45pDgocnA14YCQf4RQTqr8SwuA8CuFD1CdAD4siVRG6x8DJPkfSoFdT657oxaiSSSZkVuCroh1BdsUbPKYuEN",
  "key26": "5nH2rGCZzQbdLDjGwv7zKDLnSJtVpnXtzqL1BSuMZ9J4EYVhy9ojvYab8WNSVZVjpDKv6kMjaUwQcYhvAJJRJq2c",
  "key27": "3e2wGZw6zPUKk7fc5z3SFgiDDuiaTs5uyiYjC7kryDXeuxjcsRZQ9nGG2vABs2J3m5tbRbf9r12eZGXQpYPHZoAB",
  "key28": "wfM54bjzjRRuMvBiC21ENZwruhgdAsU4crfqY1hXLx3w78CrGuRcphVdpphmK2n3YCmt5YJEsa2DmoajCN3WtFg",
  "key29": "3VzTFFGyd1HpfWW2YUwKampDUEDU2xb6wN6vCCDtSik7cGbDBwAXQBETqDnpjzGQdXuH5sP7zVj23XCNqyet3J5g",
  "key30": "RbYhEwWQgddaMJ1RYNAATsE2UDT8s9oWaHDbdBBtDXpbLtyo7ZSp9TwRK19DJcZxeXH8hYDT2ShejXFuEtAwsTR",
  "key31": "53k1V2a1yJDet9YEV2oKd7uAfVhR8aDx6uNVjnbdQHS8kz8ZxhhLrZH5jc9kHzFvzHugdgQQSGyni8z4Sws3Rjvt",
  "key32": "61NwkAcCWqXusaGqi3Snac4E2vSax4kNm1ESpf5W7waGWN6fj7WVYoFPHz3R23JzzGeXtMFJdAGK5gse76KK5oFT",
  "key33": "5TYKPvkJPQzLTaxAtC1mey8Q4b16YZ9GbZ95mRME4gdWPSzrCht7Cyh8AWyshaiD9bHwBq5GuAr6Ki4bc7Xp3n9E",
  "key34": "56zmJnrGT7MwMD5Qp3P9smM6EHjTcQjat3dSnyx99GDAPwKjPLibce3Fw5woQ9skcQVMxdnMaXpra4hq9kJFNB5d"
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
