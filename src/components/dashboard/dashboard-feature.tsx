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
    "2MaPN4Jai6tQQBEnaLoibaaByujboTZujThi1WrALdAjQet8KFFZWVtPbN1R2hRwg9AzCQ2aWRBBnBjwJozzvk91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VpYorSiudkCCZDBByjiy8Q1ZftLoPN3JLbzpA3QnAwg34KEMZiQuXSv4ivVseHiYzZMRri8qJZG9Sidu3UQP88W",
  "key1": "5yEBw1cD32dZiVwaUDiV5iEVJpw2zU5ySTvwVSqeM7v3Bomxqw3rWLHRzYzGG7oxQTBCX7CcURBw1wTY6vi7DaBA",
  "key2": "5JiQkZVmMq4h2UAe4sQNkE98DVPhduix9SXB5p6VvGqPwA5vHREfodXP5WuLMsoYyZRptUnyUWcYBqDcbSm449N7",
  "key3": "2fqWaDZPgJEpN3TSJUs2s3c2JFFNuJMh34ENmJ3rKg28KCNva6eSnHJvS2HBSdwCo5Q5CQJUsM8zEfYe7nLoqBkN",
  "key4": "QfoHJH299YM1Xvp75zF3t9gCkKBmdZ6stACikEKobmSTg7CKxGGnp8JrA8skKyf8qyDVUVkNwdR4t5ykaVUhzZx",
  "key5": "4erf5MKMeU8BwZcsLsqpZAt7gew7d4987sCMUg3GgDvYRvwezGFvuMuYVjGYGNc7KaBB6Nqy1jwbtMPPbVfzgG1r",
  "key6": "3aE1jFrtmSHNpsS7sYDESwhHeRTQp7wzFucUPTinTwvZbsZKGsAQS594j9pFxyaxQpsdtmbSkFqHxZbSoL1KdYGa",
  "key7": "5EWqUen6Vdz9d7UwArHFtpkRSMb2TmpDntmovo3dkWhi2XEFRnfygPCtYxd3XjcxMNbxZqdA1Jg2xY4P5zGN1Sfw",
  "key8": "fqTufB7gbe8yp3b1Y2wHJRfKTA2JdvkKhmJZUPJa8yvZJcDChWC1PegspqpLRV8oSHxRHdarda9pZtQjC1oXtmy",
  "key9": "ypfnzNg33GMUpXGdwGUQRq4771cQZbvY1EwjFfqHBVDf1JPnDYtLgkixYf4Yh7raPmQKxJZudHpb9cRYyK9KzHy",
  "key10": "5BwKRvE2GQHoxWqQMLyHDaE7L33jcQXnxXq9XX1FgGzV87n16zZDiQoCKuS184qeyTqaQ6MwUx1XKJfjxH6ukrc1",
  "key11": "3qXfgkbLs5BDuJ5XRuFc4a2xtGijZpQkpYB1BPJZuSszFaW4vxVqsjGzEAVSH3CjWRCwv8SuijDuDqgqvXPwMBmp",
  "key12": "4p55BrXnJBD5nnSX3SpUR8Kr7ynMrdmhvrMYrc86TKQSVkpw9mobkzvj2ZCQv2pnvgmddBE79zAZxUTghuvRnk5p",
  "key13": "NJHeBeCsCHJGVU8h2rx9TKQBuLTHSYDzWdnMUjhYi9144jXt5ud69aKmLhMcnnCAuSYLf5zXmfHjuvAaaHRSxBj",
  "key14": "4TfUxtfaUm3j5QcV1UHj2mkDoWjQfe4oSZBZiD4hscpKrAuQ1NKHcgh9HLQXs3BzQy4pxnRTFJHmYTw6W2MvZ2Jg",
  "key15": "3LsFhTLb44qhdSgpxF8RUpQCh3vmTjxpBTnPn4mejgqvStJ1F348tAwuFxt1CHWWS9nTP5bMuXtV8xUzzw7m6AXv",
  "key16": "4svNLHhwjyvRrvcEDjoeQ9DpdUFEP58v4zAj5Z4k3CVM68p6az8Uo3NYvLiSsDLtEFrYBbZ9HTph6AbcCUYcmk7D",
  "key17": "33uwY1axr6YLgfnnFfXev3tJkmTwZb1ozDmiXEqewFwg3mfKiT9LazjPTZuGvoSWFdRSSuBZzE1jZqhLhN3c1vJX",
  "key18": "2DrCxw63LC8zrk63QNuHoJgWKPuBuT4z8oNr9quT4ba5R39wBhzXQ1XpR59DtVrztNR4DcW3PeAWSHVt5DZ4c7uG",
  "key19": "78rL4Di8r7Tih21SMR6sATJAsNK959jfmtJ7CeXhC2Wp6haF2YxV4Ybti1yaeZKWzfyJRSgtvpHVzcg85WZq3Wk",
  "key20": "2E33fYKgsegNXH35csqkWB2nUdXjh7pfbaBSY5f3wtEsMxgCVyHvPg5hRRGuz6pmpPuSGkcGJsc2AVPJVpmrzJYv",
  "key21": "4jptErfBQM7n5QM1L3U3HKd3TUJZEdSKPFUXabxdtn17EJEe1kF8JQaULUw1tdNPHqkAVqG5szr1ZCVn3JGRs6qg",
  "key22": "vUSaM5gauEcpPhccpBrPrPj2Web8bZLJxkCL1Rj4JfF7oJFpjthWnNPG14DnRVVMfociWGiUPqm5HfMigPeokMf",
  "key23": "4dMs1qT2ZueY9hRptNiN81kVBXzivf47pXbEhLr2QWQjCtw3YmwJjdsUehq2mUpqeraEnpFVwsKBJ9VkWMpoGMv8",
  "key24": "3qXmCNCwunMwQgAM97NHGAiBgCookk8yzi5Goh9Su5cqYDHcLVVHkNUdptyz8oXm57ze14egDpy2wWzkYzQ9uXwU",
  "key25": "2zzUmYsdu34BPTR4vpaTSY47H3LJALun74jWGjyXJbFBoni5w9BJPTJ7FcsRPFNTBSofAFhqUNmU6df3ye3hm1vt",
  "key26": "4wghsMa8kvyLUMKiY1foxdAttA3dTUN9ZHYw9t76hMcXiUCV4sAFTaRirjsTxMASn26DAxirP4AeTksDACx4LDPb",
  "key27": "5SQS9ghoyVnSU8hsvSh1dEfmowBWVA9zzCsevuuZjtR2VpPjhiNSWoFLZt5Sru6mNpU8Pwu7WWEiDUArG3nqggA",
  "key28": "3M8izqDDePPZdopw9hsfN3uYXHQ2Sga1WJBbeUoMjtdnNzzbZHB1PX1X7FZEKbrvpgNrTDFyRR43EJ1imeocVTat",
  "key29": "3RC8cYoPQecgVMhBsucMLdHkNhMKtJwSGfUvYzXx3JbxVSfL7Jce6xQ1UfH78SBzcUnaCG35Fm5ftEEdVT8dpLRw",
  "key30": "43FiiuANbigyFyti24C6mFAx2uB3ceXgcUdKWZ6hkie4ib8dmHcEWRPi44aC8Q1gufaWPvn2ksKg2aEVNfGm8WVP",
  "key31": "39gLgYEe6j5GQC6mj6JQgjsuNWZ8oKAe63PjfsLsyDR6KPLfWJMUhegBGB5w5VZGRQuaktJBZZBKfLt7gfZSUKGE",
  "key32": "3FH9PEnwwdnzuSz8FFvEZhq7heMB2u69ss1pE7uL6zauxu9tpBm6XWaTEyy9K5EjM45NPwPBX1svmSWyPPu7RGhh",
  "key33": "257fhM4oxBJjyf48KPP8xwocBGXspnZ2HBwugJ4isApFpyASk7s2tEftWyFsM5sj2oAUWw9e1u8WGYEPnHPcmCtg",
  "key34": "5NT1Wr1V67MWx8t7X8D5vabZi7mAHJ4bohcUemGGs9zbCx9ZS3U5cn6SYzCmyMwFLYqH2U6tnwyM1JA3tq8EmgAh",
  "key35": "r1KpMAnEBKGgdWNdpYyzqG7UcUAqjizNUHT7ExG3exRmwcB2KrgjDgS8povYDuJqoZjTNVrbLoC8YnGMttrymJ5",
  "key36": "6gUqL3DiwJeFMFJhjohk4wd1toKnZ1DQrrVax24UyQ74xkj26NS58gxmADDwgK8eFuH8SGqhb8TqZc9G6xdRBQN",
  "key37": "WtpU6zUDcNhaEGCcNRq6b31Tmjswu9PerPTGhSRFSQG6qArgZRhHDBKvAMCaHeag2nGdtfQSX4gWQkdH7qYbRrs",
  "key38": "53n6TGX4aXU4EkVVq9ZLPigx3vWCHJDWiqahpxboAuuJzBpCbsSToEJYx55Td1uNTP2Gz4L4wE9eWtD426bpx1tN",
  "key39": "geMF9zUTZZ9s249GFbSnTL5T41awGDy5Y2fFgaJzMDWzRebZiydCy1iEUm62RQLqV87dN6QPZTTBoG2QThGeurz",
  "key40": "2qRCNsP4guHEyGR1AsMLrrfkqNxGaS2Yav8TodxooWXMjq6Whu72CXX1m5gc21nH6XNymdtxSdv76wPRAgGFEyQS",
  "key41": "2RoypbatfE5KAdphYATJrusSTg3BdYLbFTKmt2mHFUfxcchPEPB61RaioA2JdGqftZoYgyDJxqHQ5opewfkADEJi",
  "key42": "9HZQbSSzBVGLUK44viEMh9XGLzapFZjcYcDQpQBpfFz22LiqqtyYf3kfTo9QsctrUuqWXJsBmGi1fsH1Rws6h8t",
  "key43": "25DX2E7WvkCCs2AzcqsXe2eFgjiVZnyLbsV3hBkZ8WHPoh3XsDEMvJN9mjT5MD6kiXvvQFbnCCFkvPcMWgJhDiYT",
  "key44": "JhTHkTCpTcP6vK6wyDmVRFcZ5W3e2TbA59E5qt95SwqizQZqewgVN9GQpBKvEmTcf41odpi2X8KdnuWnyGrth1Y",
  "key45": "5CGEDKTpuKQPxTAsKwKHhk8EHpThCZDm2chSXpbrh3ftBe2oEjEXaQF6yPsE4Y5NpwJaC8Cfd8VQWA2S5tfFPv2o"
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
