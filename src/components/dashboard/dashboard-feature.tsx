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
    "2C232gh13wXozi9k3useKQn1EERtcU6S5LmHHrcYJkWHpCnYDMszzwsymb8fyGfMtUjQarMUXd9vVVuJjaT7RU6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eyTe4yLrupBZ3gWCzKsJiVg4KMkGtLhxHrHNsEp3oBnuaitZZBRaD27yUojrNh7w2pNE8bxdaTs7F6pvXEnN15j",
  "key1": "2a7fDdX7rJVYEi5ppUxCfJBtKDeQkh4kgkrWrRRp38UzBuK9nxxsyTt9k5pDqZyAmf3y8uvmVQujQir6m11dzPVb",
  "key2": "5bRSBV67X19rp31kjZPyRj7F2krLqqn5MMFTVtvHjeCeAqTDtY4RJ29VkZ9enakeuFfEBfuGdUjAA7JKEoK9y64q",
  "key3": "4UqXoyiNcqd4YJwMCVXUZLh1v3TTdYdf6jPaM96UBcEFqh4Jpy6r4xL94gtxumuc46ZsJZ67KrtxdXABivAegapm",
  "key4": "36W9NrWSYh7MZ23ehtW3bAJTzttrnHsWWB5j7Dy5Gud5dpoprtisUfLSSEKg3atGxZiMBaMNZFnaiByNQha6S6Y2",
  "key5": "4MYS3C9fBL7My2j93aTTtqp2iJJReMonn4ATyyYdTFNaMoHVNAnnrLb2fkF4KSeX5whR9dHQdHFQRPc6T4brQyFZ",
  "key6": "sWG2VKMBHocu9Tw3R6aXX4YVSrZquPGx9U2mfWUxj8Un9tWGFcS1qX7YEsdakrrDnvtq2oGkHqPzc5ueUi8UJyc",
  "key7": "2qzbRNm47hwajxiPFedUkUFUaciJGaJc1oQeNoRT5MC8givgEJdoXwRAABWmKK838chSJEZZQrE2DCpAKqhW4gPk",
  "key8": "LB3145VJcqN2bYvHDCEfat4R1xYNfkaZqA699DmRtM22h6odpRG7XwMJuzajLey2KkTg3EiaGzF4kkfYU3xm42V",
  "key9": "3dFuw926DKfaxiSGo4u2wr7nqvCQYSm5vZcqMUV1vg9mRHnhM6Nd7jnYLqkUes43e25eLqx9h8UtEnaXhLNT4n3t",
  "key10": "3pPYgurPJhjFDRHiWeKhAGaBWLP6eFDYE2GQTjASt4ALPgotwaSTGKLdDz6sEQSNWjn6t22KYcLH6fXnjdZPNoFv",
  "key11": "5YRkRNYWLnHteUdJp65c9Esa2hY57kbS1mcQSdtMUBbjg9hmmoyY1y2QNgQKeh5bBYBk5KDHHepWUSZWGNeQdbNJ",
  "key12": "3Rec4yeHDmccutVWMfgmE42KsfWj36979YYGe9e9s7F75LkpKvQYWgqeZyXztwQGHLTfwWw94NQkGmDwGSz23NEg",
  "key13": "2wtve1drnjNszVn1Y9bTVEhZsZFnE1eEdQVERP1BzHU2xrwQcsTKXvENCVFNXTDkaDfXx4z6rFXKE4oCnKKh6cYy",
  "key14": "3w2RB1natbdegtVzvUSdQCxomWfeAZm2Em6NQYqGfv83joVmE7JbgasG2CnuqjikPFRTNrFi8EtaCEjtuGCxofJj",
  "key15": "4JacmPkdxsFeLRkmGdrbJY3BvdiZhpHreb5yVqaz3y2CmbrJXLCUWYLYYSFeo8buiAmsgjTb92D1CtRMjzPz72cV",
  "key16": "4QB3eDrx6TPgygVbsw3ugProZUzkJyKjiUNW71asFbaJ9qtMZqqGoCU21uEqH4eGyCrkTqRvuWuDWVWFwDkciV9L",
  "key17": "ss4ZJmat22Agkp6erwtyCqEZENmezuskAcSDpSCNcmtLeLRUo1dj1cCXgTc4911gN7ELa5Fm19vrgg4caaiR7x6",
  "key18": "4hQms6BtbF5DFwLrAewDv2H4am1dfSzJ5MMmZRGciZaryKSMgtkBPpYZHU4WtcCRUwxgCyuw6WHMXL2fQh2n4MBK",
  "key19": "2HxcbxDnm6gK92jfLDzeyTihsD6oTQLVZRFMS3GCGQhdfxWiq3gMnkrpJL1ftLb4hZeLRfWZnjCTVok2V9Sb8Brz",
  "key20": "56QzpvRsoANNdricnjRrVnQdsWkzoSe7BWW497Bue7gpPfEgzaCsndZ5jFmqGgWXPAHGkpPrnQ8LUwQ4RXR3uwXw",
  "key21": "hZPohjbP5whALLcE91YX8vhqzpCk3mQiC7ikmUq3iz6gPQ2zqCZjJg3yRADgBDQTn5Q8WeMvZ4XpUrqfE2JgSre",
  "key22": "5KBJSusDX1EAUgUq5fbzh2KMY6CQBLUW9ACGsg5yq26ofL5egB1y1m4FBojQ9vZtFGq37JLwFKxUpNmzbiri9si4",
  "key23": "3QLZmpNuyhQtMrEELmg3iF4UNwX9kYzfcrCBMmjjuzgdzyjJq3TMot96935AHQL82C1q5yCjpoec37aXBAyzjWrZ",
  "key24": "4trs7PpVCbG4axh49nqiguezWh6dbr3zP3LW8JTc1zz1Cv2Nu1dv5M8r9LnjSGvjafSL1hGWcfoyijpXato1b1Pj",
  "key25": "KQqJHxzggHpLKSimaGNaKeSgsWtA2apLtryNH3hChirYi89Jmg67GoYfTHXuozzrodTJWotH4s4VGQf1UJe37gX",
  "key26": "4zM16rWPPKGogx29RP4ghxbFFC24HQkzwA1bzKrCSdGEUt3hPpLVP2DDXaDFfZFuRg1GnCYjKT9dQUTBKxdnNmU1",
  "key27": "3rNadhFmkuExergSDswENMtHwPBWdgRoT4gbDVjxZ3soNDwojXexZhFqoX36DGxn9xg1WqcWw6hmHid4tvy61veM",
  "key28": "3HDC3szZHus6rnngsc25Dnqs4rmtruB7qJkqHGdQs2vBMNYxhrJUiqoMtcjb6njhyBqDhso7j5hpq2FmGRQC1dH6",
  "key29": "3MSEkiSZfp5JXPbpt76uGc6JcaKYL5eQR4gr4V5z68T1CNkRWeonA7zLQqnxSa5BNAGFUo9TeeVPG651to9dQksC",
  "key30": "2PFkZDoZ1DdP8egDtSB47N6R4TpEEFoLGD71FkWYDjAE3hqmGbNmH89Dh2JBV47LgN9wYDKRWb2JHW6xFtmBFwdd",
  "key31": "33ngqxzxQ5ecg8Ls3sScc9rHe6QRBGXZKQ3q2ygwX57tjCLt92BhCQwpbx2D8PeYi7UJvuMtjMof5wL76oc4RArG",
  "key32": "5W8rNew49KrtL8qNTWaaNr5RJB9x56Wr24CzK3gtWTjpCSXy6wcJURhseqCDz3a1FD1ZTwcr7rHoAGT1KB3X7YGB",
  "key33": "4vApK2cVJ8zaqD7knQvhfSu4NMZBdCV6SSHrBNKmiAByK6DZyhX2osHcLnTm7tDCotU7aYe6Tjmbv34LcPCuuGPG",
  "key34": "554BENASaArJBpjJ5rWPx9bWAsghymnUJZ4DWdhqKwZjxP2ry6WyMfY5WwAi1qSCDXRzTnfETqeheJSz47C9KRx1",
  "key35": "4EA9ijyqiU9VhebiUeCBBRt3VoccknsHE2Xrji7de5pDhKUwPtSoHSh7utcwtCnHeNvt5wLAZpjFAe6VLdM8iWWH",
  "key36": "4yKMevRbGG1qLPbS3SWNLmSgTv8JdBzEurYb9Vh3fZcjASAQMvmfvWAHDwfW42b7vbGgppHXhAkCfWELvWkHwds",
  "key37": "5ftPD26VQsP4kPKta1z3KJS9TU9mpc2so22dTNTQcU1AGT8ZKzS4UqrAGhjxSD3fFYT1oBbbH3Zri5Gmykr2UpTE",
  "key38": "3TNjf5mRRUPPQHs3dF3jX26MgyN1dLDHRnf5ZNoFupxeJriLn2AUG1LYrLLWNKhaV9NoHwJnuhfkfCDUrkJJZwRE",
  "key39": "BD4an4jcm9ZRias6pk9MfmJxdqP3RkkLSRctrErLWrJXKoGe5F4DeMJhXmrjvAZwsaBzMy8eLNSfEnAWEXMPR9K",
  "key40": "3M7DpHScytgFDLAh2Afc6DZRwVKbnoW6tSyRqNMd2Z4Wu6cgEP8L3hJPyFxFey25RgrLkcGnRRHeYgA84HEURkBj",
  "key41": "2BVV7i9NREJatCrQcdjGvfeBTtEndihDwYTjTWFTbsJNVasDi4AzHkPst1x5JNw3YVTr48G9FnNrmDGjjS7XZfv6",
  "key42": "2HJcDFcdLhN4vZLy7ABigtas3hMhfJnM66btREjd2xDQiuTsJkdJyebCEPdHJ3CvDyoNNE7nNWWdfxdKcxbroAVD",
  "key43": "3AbF3Zj68XFZCSQjHESKsR7id2E1r4X6VQ3LrV9fDw5kobbK9pjZykkomT2sFhMcK5Tmuz2tBXXrwzo8YPRCsBzz"
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
