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
    "5c4tLUQPi38hJbpuqufkPjz7fQzphJBRhrMbqygvABFRtkD9VQaMtAwtox9rue65JTWjftEPQiapBKKivSNZwouL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35QqGu9PV257z47aoTFgFzYu3qwPGFwdpjKPG9bTTxQmZMBNMrv3doNRFu2KZPXtmUBKswiEqYxd83gcuJ1tVmdi",
  "key1": "4djTfrbAwkbhuU94VEHfjoa5n5HBK9hCuncJkJ8d1RFAJFcjfPxSEchoU9MinjtHpvHGPpBLf5osNGdKqsLZDAac",
  "key2": "573m4rVC8Jg6GrTQBQ6qemfYjJ2FTAb4NdwPoYhskky9aQkTa3sRazj9uF5i1f3g1WxrJJSpvQKgJarNTTkqmzHP",
  "key3": "4WcPPwzH75Xz51ZzbALHhC22tujGQBWNZ8aeDdsBMH8uPGPkWy7a8y9Uq4uqt4ywbdzs97h71UjsAnAdNBQexyd8",
  "key4": "4WLM7QBV6YDRZuSNuctfkdmV9SaLM2iAgU6nFY1BHxgzw6yiP3pUcfjYrhZo7bSA2K1Eu5YYJzUQocxTRKEoEkmR",
  "key5": "LF5x4KMQyiNoMqMgMtYP9FTUzMFLbL3wv3MSSnvhMjeFsGSa9h6XLMS3dJtrVQSnC6p2DwbzRfFBNfvpB5bsBKW",
  "key6": "5HWUznW1aS58ErmWPJLjRc9szX8zU83sUnDi7SU2kvpGVpeVUB64pEqL4zFPoL9MPYwVX1qQHBPSiCofqG57jt8L",
  "key7": "3p3ywv5idjaEnTkDwXarAokPNWKHiCmDnDEwP7uQKPKEfy3TwKGv6d2StGbVfw2HQNFt1wUtaBm1pVi2tvJF9E9c",
  "key8": "3JHEdnxm2oDoBACFYnsNTvLfrVZCmgaMxuhb4wNGv9LzAqLXtncmMkL3TiwoZmC2iRYfzmKZQmmMLQPk61YjjHvW",
  "key9": "2Z7weD3jzGU7iFQhxFczvazhXTPrkDPkunuUnnM1LLSAeW16EEY2GJgueFLa5s8UxouKE9KcFBy27nAXH2TtkZp5",
  "key10": "JoPpRZ3FpPQkARWWC8kkLvybjrbVx5KYw4gU9s9t1bRgWGY5fXwgnA8CKfxdiC8wzeAXKRJX2fhC7ozBNjW43PL",
  "key11": "NR1o4JyArKswRb73Wc5djRkJnZf8kBaKsFmP9oZCQxTepG8JXkQv5TKYW9RG4ujbdCMcnpx9LR78dwwndtshXiY",
  "key12": "3FCTGgrAinnpNtQ36oFLKnMkBSDdnkpFG7KRYBkEHxdb8vNQYpMqc1TGuLexyuwCqj3GtWFxPM7GRDd2jesxB1my",
  "key13": "56DUWmCHgbeVU7LQHEmbnPiafYiQSvE77JvBX6cN1XbjhC5kvEnLSaLEVZLGvRkeKeTC9SXfSkcU7eLnFQDE1URq",
  "key14": "51wqmr4vDS1gfYBSPQyzpRvFcGFSDadKGf2kRjyp8rVk7hoYzErFHf3RygFy2Eo5ipCDYFvAM7TScAsukYSD4tcn",
  "key15": "59onpFkckgrGrFcCE3SCZ49EHvkj4WZsLgHTEvCS4PVJtxg317Wb4rzRr7MjDbhy3gYEGujeVbk5FiKDLpoSkdtE",
  "key16": "3ihujdVoF4qA4Cbf63Knb3oYszAg6WimTRz8DYZBG7JdYVWiNsjbNpYR97xfPXkYGBkqoNXBLjWQxcfQSFRJg5Mx",
  "key17": "4sxquRsVwjmb7krq41icuaySEU1jhmF1DPbbzKSfzwNs2BV1eb5dmpRtyfgxpDGnF4Nh3anoVoYfCsULfnKbDJZt",
  "key18": "4yYeQYNqhK1KKpDWS5iBprCHkkQsTMDGfZi9ewbcL4YubZyLLab6L1Kh5kuvgBtohttTZaeLCUEJstqrhrSva9k1",
  "key19": "2ajXEep39WVRzNmsw8U9WgL7B8A3HiWMefkRE1Ve8kXhHpcMXHRduZ9aGCiK68yUzGUK69xp2dbLecDiFo8pTEQo",
  "key20": "5ZTDzuec7wnGDLPkJ6xsB579Uk3kCqs5wEe2BgBcZihTdPAkJwhAmPQ843Camzfdj7hbiCBaYxgy87ehf6SBknYJ",
  "key21": "4FYAeAfAPgT7AFLuYTnpetnDFoGYB5CVk2nCQMCBt6RdVKa2xsby9zFwBU9jgxxUiRGgDsEcEBtmCL7ZjB7cvWyL",
  "key22": "7CfZJBrEkbqjDnFQdXqLhd3qLojeEynbbu2Y5iBEkwDDFTRy9tiBBUk79Nj7TLCNse7eCDdTpHS2EnbiuL8zm3T",
  "key23": "kDz1fzkNa4RgrkDMKyBDCtgrxkW2GPQfVvmntYS9QGe4DyT3JMEHFTtiG5LDhfKkrU22gyRFM9mt54JehuAhGWr",
  "key24": "4gdyoiExhfQsifyFtaJLTgFPoEPZTgg6VKU91WTocgLwM1eQ8iPoX6dUsvYmDTCauLTZUZFsAAYiTiPNweQmTsZK",
  "key25": "5gSPwGcpkM9UUXprjpDY5bv8f6QsoJPxPcbYFuMBSQ7Y34r74pJnX8y6e5bcqKA9KmzUBCfNTH5DBoFuHqYJEWdH",
  "key26": "2URjS4BSuotG6c5m89Ch5mJPAjzQeebrwzhGjxqjmbqkKUWTdsDTMnoxdM3ft8TV2BFWzKDkKeN7ARkYedutN3ot",
  "key27": "2x7TofhiDPcoBxD2Lh614JskBA7C8ZepEtHKf2R4fjgKXGDAdyJbekLtByvT3nUGHLoEeXtnDcSzxU5dn889rS2t",
  "key28": "2oq2ehCKYUCaFx1oLqMnzF6vSRDyZDB7HkJnayt6uyjqf7Bq6W6TVG67izXzNtseGysmLuMnyjkYdKeXpcXpc1ZK",
  "key29": "5XWRbFhW3HX62ddM2teFgARVGAEykgk7zu6Em5LxpiHjG9STHRVX8dgkVQZJk5xdmNMkQT3Rdr7nL6FVamvrv4Wu",
  "key30": "2ofUEUY1fw8x3g7zCtFWiiRQVyzo65g9FDztEbwQnYsVruRkyhMCa4soxnfDpQCmfg5GXyJMcxWDUkM1GpxHnYYS",
  "key31": "4dyumBHd8p6L4U2pUvbSXDxZfaqYjFuyCKoJLhDCzc93P2KBNeBHkLXk8MTS52H8rSZiPimFji9mYKiqkcNAk7cC",
  "key32": "5J2UmTz6rDjxtGhBByJUWn5Ki9D6m7w4rYaXTB3ruJR7kT3iTkrGRHbSd3KaxqQTwi8RamqzggPtpAnsqh7T5sVi",
  "key33": "2P8U8Gh8Un2qwa8x1CcD32Lpe1CfimgmAcL6VoL4GcKnKuRPPhF98gw5JELx6AJKoM86z2NFGFxDYoStbavg9Tfe",
  "key34": "5SrfQdBriBWuuxDmm1TP7jraJWk2GjNZtKfJ61izuznowSCViDmQUseyoqTu2VPGmuSu7ZSJ8KSapVoNvPPWRnW3",
  "key35": "ew6sJjKbM1bMsMiZNpE3NA9HGHFycEWiazuGniUfG6iweGKHoCRhLJ4oDjxJQ9Z35WSVu21qmgvVZXcYzKvZyvg",
  "key36": "5xPn7UVZ2jaR5wpU3X17VVcZq3j48KEUYRu583JhkxLqjkuvk4KuZHtRtrG9GsqCJttjQ6gZeSLV3ijxxzDmkRSg",
  "key37": "zJwt3uGK49yGnRnmTFKARSLhsWNV5w6JCwryyGd8KAQLiyK7wfTxWp8W78JseDGZ7YgHk55b94ygZFS4DmfKwZn",
  "key38": "2WM2cwjzcDmTgJYCHkNcQmRcm2mFbMmtrDdXqC55ytDSb4HXpHm3rDukqU2Zc9KUA1tfrxFrdDqxMYwYWp3RmRhd",
  "key39": "3yPuQf3AocxuSvNKpYfPxnh9JSN4RJv6g5Pvpad9NM5KHDfxpvxfD8be5mqsXZuVRbSSTCbaw8nPe7zt96G49Yz",
  "key40": "4Bb3AXf3HMdFSJfDasV4VrmWDjyYxgu2iMHSAfTkoageJRc2CZYNpwiyQmC5vUrQAriK1UUMmCLxAWLZtSxCkYxE"
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
