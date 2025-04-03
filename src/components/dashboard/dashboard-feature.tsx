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
    "2KFa815utoVPvTSiU26DMHPAyhfkHn5baEn9MXnYRC4AXEkTfRtgdzirNgfmEgiT654MhfHRnKg4odGC2doCsRmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZgkCWFkp2GgPkGDbCAQq2YK4K2XNhEP3B1UQ2k7ViaHmfZ1f3YNYq9KdXhPbGNa29Sa8GMAj36R5rjtpEiNDtAF",
  "key1": "Rbyiv5wTBpwToAzjxviuCdGY8hqBPoWvruo9UJG7gQc9ucxkSCktYg6nb527WeVLHnFGyYjqAdzwKJPo396QjQA",
  "key2": "F8YFyzMs5xSuZ45y87yunfM7ACdwizkBYRo5jcLXuQgcSanjdHfhHV9WQxebrQP8pXQvUPv3aXH2bhjEVaNQMAo",
  "key3": "5vN547UVpFkGjhTbvyDNj5LzHMzz47PZcyGPmaTchWk6Xcpex6UXc6qCijSMf4KJKzy78eFeDXnvjCmFpPrbeTeL",
  "key4": "4uCC4ZaCzHKkZNd5c29CQerXxt47DhBGA7ccJAx5dWivKBjNFPVbDTgN1V1DiMnxCtGRjcm7sqTnQ1JFA8xbZe87",
  "key5": "5itPiWWhLo2s6bC5Zjze9CqSEi2dR4c1Wu2hjDovg6vRqcHyi12KkC8UorEn3mvcK4wZyfdhc4EFKAikRBLpVZuk",
  "key6": "3qLzcxqAg4DvoX4vYe13DheZqJkQ9jhLHNvE9TQE9yneLwyj4g21cAFqQ6P5nVTfabEGJEMK2geac1oZ9MtCwdxA",
  "key7": "4Ue69JbNLc3CX39XQmaPBLycXhQ1qMrZmHy749soUziVEzQKvSvFTr2GXzP1Dm7N2r4fAcUHjci7wBmn4dMCQWeJ",
  "key8": "2SaAoa9wB6rHGg3Q6AjFswqcaUM18E6Xk47U5B9ZSX3KEwjVmoq1Kfnn4na4A8ABdKUGBPYaTKmJXQqnhycTgfRb",
  "key9": "2nwn8Jn1G2p7UhWKekgYvvfB67F78uk6zP1X39Ysnt3Zk69vashsQYGbrkhmADqxu5YpyEFGLRLoB5dsXpSd1NzK",
  "key10": "5QBwQHpWeJmBLvRFWoCe8yaVXniUJsGFBxYkKR4Q6cnAFsdbeG389EsEHf37FQZ78iV2FNMZ3Goju2g9KnhchViR",
  "key11": "YGHzF8F4HgRXPLXAZmtfQf5BUuBakUZpjWD1GENbx7qJZrnXrFF8dmgKzPZZg9Loyxi4Qtxw521duea9fUNeKyt",
  "key12": "4WM4yPh2AtGDWGq88mRQP8hEVSJRDqqFCUh9iyiui7hDtgpzGkUHmMYU1xbPraa4gQgJTxqAMYffvNjAWDJv9fLw",
  "key13": "eaLWoVg3isd8ak7BqkwRg7EXFnxHWQxcYLJwJJp8T8LbjUkYA9VU5VE9HGmiPLFdC4TuxQUR1mKGHM3bDpQx5QT",
  "key14": "5XyMRiXQqHAP39H57GW82qgKEV4hhf3QomdwXjcouBz83zaM8t6gYHUSekhBnf3feu3T35az1zaKiPcTRQRx82Re",
  "key15": "2zaFqafbwJn7Aoh1TCcUezGiUkfRu9bHBdNduDQvA2dnpE8B7527cjL59vC8xb3zaBAsvs1DsE6hpNEdoEs55Ni8",
  "key16": "foiEfLvEtkrCV55ZDSCFjNtreRkx8SNiRAEzFhkV6EbMNuqKdugdrY1Ytvn62L9KZ67n3YSqNTh6mnDPoPQ7R7p",
  "key17": "pGuVmYJ4W7JxnfBywDWjfjbVmY555N6W4uQD7ZBv3kqU12UszaNvRqAnxtVvv5Zugk81sisN6rUftqCpJkTSJDY",
  "key18": "5guFsRsaTDBwrLFi5ESxEFwtzUV48MT678wz84m1SF4t3Dv3rykNR7LN56SWbRzzvyGnAVKbXHWgMhRXNzr9eYA",
  "key19": "36uf1BSZ5vSskHuY5sugPRB9QrNbyvMoeotfBwyZd3Cw1ZG2LZRKjQVziWBu5J1PgQvrcvoPsDuLuo1BJcrzmM5R",
  "key20": "5rRfA36fNmgcejwe1ffej9MaK3f7b1cbC5B4R9xpKhEkZ2aLZWbokcvrpCu3VMfEF6xnrQfu3YEFk6hncXi6oDEp",
  "key21": "32XGzsY5hw8AJna2ejLQEPD9HBi9b5Amh6kpgpaS2JUsvD4cXZYZ2gEASNH4VEBLoq2BPtmu1vJiHCYyPvhm5juU",
  "key22": "b7pSAcVbwjv3VyV8GfaepCaR9GKLNtbNUyeFPGqUnWKi7S77LQj8NCUNvXHTnxHRYdSddAm6atAwCs4AUAuU6Gc",
  "key23": "3hkB6LDo2Y39akSNqtmo7JQQ3XCkbA4E2nbpQqwsPEAnYEbTupkcA9vWGt9kQpZsqzNETErX1KcHZKS4W2Uynysh",
  "key24": "3J4UhcgwichgvgKGE7ivfemzeYMDHUx6BwHcRooDmFakBd6676hFt4bda5PK3T61K5btgegVGVgeJLok4TAKvuWB",
  "key25": "5axRyZY1sa7cRETwMZaSsAi2wX21JAvqx8KMPwZSM6jDXfg55Vs5YPcFtP3NyEURRmH4YwKhjGfJgpHMXoSeAVNx",
  "key26": "29B7iFRxdFjWhavY4yepAh1p8NMLKq84a2TUFT5X9ofeKdFRmDZu2CReET3Nc2ZbczyjSrz7qaFypsLMi9ex7VyW",
  "key27": "29f39dyKgqpvuerWP59AwFkaSJEYKVhVj8TH3ySVu3EiqQmhtdENqGsPaN4oAp2MotAYmDp7h8zRetmmFdvm1Kxq",
  "key28": "2rA9EfT65nuzt6NbFdSPjMWRiviAYPeJZpzJbo2xWsWUAMjyg1TrG91CCPPFj5hYhJKejf6ZK5J849N89hoaS8mc",
  "key29": "3FNkcYv5LzjS2Bx4LdHYV8KTMSfH7EPWubmfv3H1tYPy7Nqiuy8S3fLYivfF9kTE9ddupbBr4tDpFRbDCQsoS2J7",
  "key30": "5xqSsAwWxo6Ko2n5eou8Vhm3n2HHWLhpr4A9FbY9gadndPQeiG2E1Aqi9fh3Vpq6cozHXPuvPJr3bXtmwuzGVVzy",
  "key31": "3gti9oMGV1k7Kr6umAsXrc6ay6JfRMg6kswKKFWCamQLs77p7nDmSzXZxwP1oXegZncjgcE8Z8tvjvh2dRZHNzfN",
  "key32": "cXnszGByrQejMbtJyDcxg89Ggop5pn2tw1RWQEXUA4rDm6GrHSimmcRaf22CHKryEL3BMKV5RCASKszrtg5iDWo",
  "key33": "2vqoxnsWg2A7b6PLDSAbsveggSd2gDvNVtcyE7MUG2ebj8Sx1bwQNhY5kGvFkL9AgXp2GWGww3SDHRhAskEAdj9F",
  "key34": "3M4bZeoJ2uZ7eDLnhXVPUBk9XSZDppWWZg88RLCPgc2rveAH9anfV18VTZUDMpnDNG6nAFGmpyLTxrtcRC7WLWnj",
  "key35": "3gyKT6SMnHN295mmL3Sp1qnT3SSx1Rxqvcw5WnCagQmk6RFpZrJvv3zhp4fcaT6PGvWtGdWnZXXnrspsnvWYsYbT",
  "key36": "54JhbHQWxeesgmPSMPsid328cG1NK6RwTdeFhhTDYsvpmbW28DXLhk1PEsaaNVtpdJjtiFWHr456rvFDESxuv7oN",
  "key37": "2sqNFmv2WFn4NLFJJJdaJQPoZE5tViJGpwsdpR1QFYsGpi1qFA5jhcT1mE1zdeKPWaDkCQCUKww789H82nXzZwt8",
  "key38": "38DPNrDXtpsWJFBAnmTnjR56nHKSE348D8WiwW7yN7vLRaVjkLRhsTKKX9YjT7iD16U9ZGvkKSb5rSxc3TrWW2Vn",
  "key39": "5szVAMofAFcJuRMX8nYtPQk9vGgBgYHHuCpminMuLvDRWxQvkg4F4e27JmAnk5VYwUKKspqAwY531YNndS1LydJk",
  "key40": "3eCa25HhvBhEbcXc973sr6TY1wxQqxHYGvxBn8z3qm7qAXtMQbsXKcjsdJf9Hcts8UM6UsciSbFS5ri1ZFrxxMBp",
  "key41": "4VD1ybchma8W3256jJ3Ns8tGtrhg3nSdC28ThZVTr6ztYjZ4yRutNXpvi15LkALJ963dqtzS6PDGoAiFYYazdiEp",
  "key42": "4yCyed1KPxiH8mf6ecJkSgiypS6qykCYTKhDwXG47eLHebSCFty4GoTChGH4oWUnMkdwT7pup2hmxd3jUZQgc8UB"
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
