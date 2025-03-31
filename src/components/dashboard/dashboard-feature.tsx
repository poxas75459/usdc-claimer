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
    "41kmRRtSrseWnSXtJZN5d71A3T8biszNdAbbg2cfLkseqwzmRUuv21sUAGaMzJT5NJhqJuf9sE5MbD6Hf1VmTFdz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CPW2tyTD4Xaa2NQbV9AyxsR6Muwd3ABg5i7YFfFiioDRuTGCKjj25rDR3PrBrJ7wikopKrVoPk1r3T6cYqwiAUa",
  "key1": "5rFEq1bXHsxDNtYfvnXEpQ65Gz6V6fyfHUhrqdZLMuCgJBxHXaNCjT1qH8wxurgfvzrF1MXYcUVHidCd8ZTAq4A3",
  "key2": "2TLhNvvErjCRaEg7PeHiLMQBKoBTHPnGV1idZwVryYyUKwsXU54pQy4MKXcivb48Dy39tzQmDJZWH1YWBFd73kGF",
  "key3": "3zB1rhNekZ2fkGBeQG4oFKo4ZqZ2HL6PGjpHJW3TRLhnoDaXcTL12j5S75wcUBYkEqGYS1o1MDpUQTqk9qZ9nQTm",
  "key4": "U8mtNMkCVWoumVEKfRqjNwNnqCs4upPfcgspEi4d3GFdw42srsQp9ioBK7BF2sLM2wai33NBU2eNwiZsNptBeiU",
  "key5": "4LSQRJJn2udH1BjBaQK2pHxDVKGXe82W4Lhf6wu41iGdWff1n7tXmcPVys4gA2moT1pwh1xkKJDfCR89ogYpEJJz",
  "key6": "2Rg3upqeJJq92vgJCPR23inp8hxWdNXcqR7WuLHdgK66gvXJkRFyxASXgH2FMqMMaVnWGYYwmZFMku4FZkDTbbYU",
  "key7": "4BGsku61hQjg5K2dtx1ZnfzpfjkG43JWrQi7wV2UhMJt57BgK8C6ppB5VQencZ1hawfH1GNfZdW8B92KoDwpgUSc",
  "key8": "3y6Yssgc4K7Y2TqRsn4rhaYCo211VZ85MSZKQ2a3revyttzeUdrRMwVesTwoAwonF89dfCrpH7GD7dumDWP7CH5e",
  "key9": "5gsAicsvbfzcFsM2GEVtS73EpLsmZhBpUoDRNyfoyMSKyhRp9Uv89RFPpvFw2TSjsjVhKv3d49DaCSLDDwNeWRRa",
  "key10": "5Dyqqf4Km7ffc8Pzm4Q2mgwZb6yhpJoepoBuFRU1zjvxLe4kGtogz7Y6X1fBxFTQ75Ff1ku77ehC2aeZQGcijMWW",
  "key11": "26ayTMgUNXnjdMW9J8MsZUhNUmji9bHc6jQ2v3TDfKm6r5fPRux8dtwV1hwKB7xQmvdYpKaPvyXts12UpoL7C6i6",
  "key12": "5RFURzvQZgAUDDVZoAerroGSwYgzPCL66JSH6gmYJu1pCL7kMefebHJDTKwePiT1Q495up9ZSbbAMyQ4fs9pu9Gm",
  "key13": "2tfCtw6zjL8BozNAVNm12H3J4FcZPVNWTTw4SqUginQExHCXPVSdpcrhDAgeD815MCxHeQD5H2sMdo1c9fbYTkNr",
  "key14": "4hpPWJgRrFbyYLeTEw4R83GSXCKgRXUCFh7bxtKoW7P8e2avR58L1ezxdUTyF2AKu6NusJWSudqxFt2o4gGimr2s",
  "key15": "YiyQToxpZ3nid7qKcugJtUp5YMSgA3irFtYdYAZ5T9tifRXSHodwyjyCMXdGHNWVhcz7QizkkcQ12DqjpFVNqqE",
  "key16": "3fRJwoksEeuH14zMjdzDBgSeZCjkKXc8sV53FEMFVWPkk6RLsaSNCYNPi6osFkVuBLmfkajRUHRJLxw3rAnKrBg4",
  "key17": "5yLVoU9Ba5NE2y8meQnE7W2RT73F8dKAEwfJKN1tT1WKg1otkAMGkzo9Ufw4HCAyMBP533tLxfUPLe5r9FfVMf14",
  "key18": "3jGYr4n6LQjkEmYxE1nLmifGEF4Nt4MjkuviTSpmSBp8U2RKXpVNrPcJweJK8N4kzJcGrF4nwMYwRYJy7W7uU3gK",
  "key19": "2yGmUPrgkgodaboEqTz85wFwiJxnBDduqcnGESv8dy74fncYo35augNpJ5dvYSRqrPhvhASCMfE58dhkVphpt7oq",
  "key20": "4qYDGjSksemY8qxGA5U1aGhHrPXX8FjvG8zGgYh7yvxwAyr1dDuLyY8V5tsg5b8ucbHArrfYEkUDNCuUPEruBytR",
  "key21": "4tuw9qDhZuCQUgWxkSWqNCXWN3eEQmB5HjzJKhMEBUSeZKYnw1QaNdNrcMB3ZnJb6YNF3yUCCtknkuGhqHXB2QPX",
  "key22": "2HbsxmkPFnj5NT4Yse4bMnzH1Rn24PSueoXLKK8JSG6wPWxcu44mJxB16rASi5ht3cWYNGiZ63bvwMc9j1BaCHzC",
  "key23": "3h4F9MW4nPsNPb3oWn6nQgymaFSotPsjmMkGTRSeu1Hy4xRtDQNYiGrGGLwohjpu4McNMhH3E1qujw51cqXgpA6C",
  "key24": "MiWadWuh4aRCKNxExp1NhuEeDRgG34Vsf641xUeuknWbRbjk9CW7R8kx2LxtW7smmyTNyqYaj8dy8aRZHCsa2hx",
  "key25": "4PVfAQYVAw6UtWM88iX4ixnuhes62nJr7WCUo43tRKdnRjUcE9EhseCq3wygPxkTVMkwi22BkHozjZxr4UFGT8PK",
  "key26": "3UNY2P9CpoSqpEFmb3doCYucuBaD2764JBBpj6HP4585YKbyPer958JnLjwiedYKVtpzQpRgscZ73wZMFqsiZorP",
  "key27": "43SE5yVvFuBjtvbYRCerZUZJzuYA717ropUvv36XR6GhxwN7neQiHXHxTrjtwygtHFwwTviXnzzCQwX2X87bTE2Q",
  "key28": "38n42XWuKnQNWp7fDLMzybpDBvZqFygfwF8qt22qxVWc1ifcSKyAfGHGLvx9FFmECRiYEEkfusL7F2MSYELjkQdt"
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
