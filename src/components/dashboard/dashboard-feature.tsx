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
    "5PXHB96PeLuNxLrqvvwhXKdisVb1Twyn8DnW37pQJxzwGzqHU3GAfhvGvfYbuYC3haQKCmosnyC3jNMsnBV6YBtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3whziVL7EcrnVuo5zG7GRM9GcowMVyCDVFUNscANVzNxtC8KDvc7rUtqdeo77BdSgtLUP9QpT9isRDj5j3VRnQaA",
  "key1": "3F5EkCwoVoQuBR5YayGgsz2mTxwAvMfQQpuWbn2jHJKr8tRYcDC5ESBDyHHB1LrSb1oug1ubz5Q9fxMGuVMrwVuV",
  "key2": "4GpQwEvebGqogKC85Ccw9KX3hfyny19WdW63jTiopXTAtvRYsCb5MR92VejXuGmZWKjY2Jsz8mVJqveGFEBCi66Z",
  "key3": "32qRzcZfgzyaBWj8D9hBBMGnwa62NwiESqscbD1raGEw6cxbtpZgob5jsahBGnNe5E7evxiSp2NsXdhytRkeaRpV",
  "key4": "4jZAwWiNFhaoPXmbHe11WC3hBmLacbxQ7c6XgmnLBzfuASM27BVR8wEgzjChcWdZ168tn7oMpScvZZHVA1iFropq",
  "key5": "VKmTnzJ4PyQqwyy9nBrwaSxnCVrWS6b6f3crLmvk1AoQrpNuNHuPBnq7EuFZmRLL6GQwGR8d76beAd3N2VUHibi",
  "key6": "5tpYhh5ECNi4YrWxSLWzqqhrP4TCvQjqJ9orecvbiVxLWiUmCHbQQxQ2PEnW7nHcyTKurGVzLTmYrEdvgb7HbvSW",
  "key7": "2m85T9BjLh7yKE6LdWSxuzinRnmZEv1miQXpA8WhhZo7BSyWrbohrLgyLVpp2o95LvGq6KYL4gvr594dcjkiA7t1",
  "key8": "4X8hjKRNdtvFH1qsnc3r5j4L8KFgxJHpeuUYbjZqTgfj2zVg1Ex8kcvk3w2zc6515EUdMrhucrBDUZoBGkKnsjcK",
  "key9": "4pFeZn46o6AooFqV82DcAoCDRT8c92Mues5LFPiKWcHUpHttHUyeVyM6WkiA5coMJhpGrqYoyacXnWGjfjiPJeL3",
  "key10": "2EduWcem1h3Qz29cr5wrAX8rqS3w6XTWFCpouzZA8UotvWWhvDBxGdwcMTn7MnK1E9aZnzGw76RxW9BM2Ycj1pwL",
  "key11": "wEMRAYEgoHe5bD5smVcYf5rfuG2pXp9XM2sBJHC6YKganerjGPTd5kx8Fh6h7kMpWTJT4AZfMAEcrHffqzc8H7E",
  "key12": "5EPNu37bCqT3YYTjJYzahGkxf15KDSx7BoA1LYGG8L5zJVtV8ni7Fk7ukQkCAbETwosbkZCFGR5Nm2SbCZY533KL",
  "key13": "4BZ3WLmtAAJ2qEaV56iE6o9dbpcr31dDUUa2ZF4UikAq8gkVV2vHryMXum91QtNtKGGeoPPVTXKkrsMJSyjDUwV3",
  "key14": "rhrriiNPmSYCvPBfK47w9WSCcaVc1HftfjGBBU43vNYB7nm7rpFKGFa54zWnafX6a7wHLwvkJKSFCK537Tnehud",
  "key15": "NDi7KRrupMZXgBeznBAVFnCd21cKd6ye2oqoQ5YM84rqt7MKPrkZbyezwEowWJFTSraHAnzpaELMJQMdL44MhyG",
  "key16": "2S3QfiNMRzkfLd23LvrW3c3LV78EKDD2XREdT2GXfTTfxEJ9j8AgrtQ8LtocqCZMG7SgDrEDFkVXFeVYQtDN6ftH",
  "key17": "5J6ehmsXPBJp9VFMTZ2xSZgu35K4wJFKKNtGgjt9XviJue67wJ8dEQ3Hkvo2NAoTfFJqrqDV1cDuZkUwNDW2kRj3",
  "key18": "5JLeaCPW5TDfdrF9dJXKKzWL1uw2KSUwBpyZXaUFueoEVD2fXduZ5wkqz766zNDHypM4dQbFiFGzSLnNnpYUXjmK",
  "key19": "2xA34JpX6uaaLYXxLtoBFaCp4wpnw1SXNXZeauJjXCzT4bWcLXFzpY8H8AMfCiryG9oGwtWL9L6Rd4SrJUA77uhH",
  "key20": "mvK3yaGmhdbY6JH5G4KwtgBhqSX8hri6oRjgr19Go1cT9YVKbHPi1T38k1WbKrCxymbM6nunWVvkWDj9xFfmf3u",
  "key21": "5qQ9UPbGKiTuJCtz8FzjCEJZ4Dzgcp29sErGYJkt9oeVjfh7BDnmF5y94ZtaCsVZZ8ALV9u2YgkgYjQMRvU4kKBd",
  "key22": "4iNEF31RLRtw9fLkdW4UqJ9rwHVj9qNi3LXBDd8Z7LecxZqnh3AuRSjPczyt762JdJqR81dLQFxNr26TB2FgAMso",
  "key23": "2UXpsDr7q5QSKNLaC4jV41nhMkkdUhFzBgc93n7jFWcmK7UxspZy2m1D1MYokGwsdSWYMSTfzVWUV1xmYrQu9WGK",
  "key24": "4itKvinLCaMtefAzzfE9M5nRYiNPSHt771v3oyM2hbSKu1N4uk7345WVJCvAZjMxo2fdFQe9rDhw4gJsBSo7kL9N",
  "key25": "3QFeRW45ZAhZKxNTsSBzsyJ6pbXpGGJyYzdSJErs7eBdiy4wAA45aMBXkc7J5Whg23MiXyTmimWwtEXV5ZtfMdHW",
  "key26": "3v3vuomnmR5js4YS4opGNaRjTRBPPhjV3rg5SXLjwjqWR726BB6TwaauhMtQ9qgCXZ7zVuZKXsmkSXXDruxgfoh3",
  "key27": "5ZvXNwGz3p78fKJ1Q5SgEwhmfBiNDAg2M4ZBemGderBgDfhGiZQCdq3bSkHKod7CEZ5gpQXJi62VPm5b2NCw92xC",
  "key28": "5pnPGueTibsaBJNA6aC3PjoNdmcBTT8xQq4qKZ34TbE7Q3sFask85Dwhj667QGVAvcLzKzG5Wbcfj1aWoxstmMu2",
  "key29": "1zNMV9ReZb5QAkzAz4euUNcGk8b3pioCq4sCT7ieTM1uWsusFZcdccuwQqXVf8nYnLYeR7h4RcVKKf4JM9SwkYY",
  "key30": "4NjMZRUduL1jEpu4NgK2DsY9QiBBSJYu79m6cZnENabczDubumrk4zRzMUpEmhhHYEiBKSNAdDnzVFCqKKchLFpS",
  "key31": "5YzBnEorkhbkCVTRCPLbLuRpmwks3P2M2AtSCX1W2CcMaM4AJCRgTm1KCkmpFCH7sByWEQVcACbkpDweceq5U7pi",
  "key32": "5oj4ZtRT94mmpQbjYwsrMhgNski6waQeZGr439o9YEEL2ZUxNHQGGuYMa87FKtji9GoTRTX598ppUFfojsqDkZs5",
  "key33": "3c1QBJznZnDiA1CMFGDWK3tef6JA7jjSntwcbi2cPXZkKiGtmZ1jwpACzPcfmX7MifLMYiwnGB7E3gwADfvz7FMH",
  "key34": "3zSaxsgu2VC3vkd9NpwabEz1dRuoUKqPMqDPePAaXiCTTLSiLVZdDpsQRjetZhDJCVBiFQhWYUZXmgzWpSwSexeK"
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
