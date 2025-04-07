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
    "52dh9pmdriLa5ziLaqL2AETQU3iQdmVx753apsKLpZJ1MptabvxLuYzXeurS2neZfzrQFJydFcGiTgbwdvqx8saQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46NLgPhW2jLoE4E361AWAN93jfmgEs3oz8YSEJ2U66RZsLugPZrJLvRNX6wanwz8DJiaV5tvyu8uWuyco84dipv9",
  "key1": "5354jAgt4Bc4qAxEsWZNmJru3z3u3VtNoLQUkRDWW2kGo9o3iGnefGcA4QLaNdPGgM4PJAHFCwmszduK198QdVvn",
  "key2": "3n6RXpv5uWcHriAs9qtLyd9P6wRtPw8oXw5qkTNFzWXd8apPXfPzLJnbE5R3QxVCzpWAZo5ZgFLZ33A1vWWxD6T1",
  "key3": "3tCZbeAtYqv6Aay6iiRy1rSg4aL2VWkRWEuwvUn4jDbtupV7BaK7U1vrUtUzjg1oMbfyWnAZYpLmYWLi89cNaD6d",
  "key4": "2Z3SCmF2dbLHgZPwJieT4Pz5ELfr7wfAuBzMNzrrF8uyaMmdffmpTpDferGRgFeoHjLPFwhywbUv13vCFceMDef5",
  "key5": "3g3SbbSLbU2N8VMjs7puFoDi1h7d73cbJyt6x24VqRYdMdZ9tQmvnXMrDnAT4fowdL5fw8xb1XVLAKyZ873r8EKg",
  "key6": "398xXm3pKHKfNT5oQbVNVSCyXtb6cPSSzbukph32T2otSSkPSohSr9j8uQKQyPTErZggKTK7jvBvhBHHB22o6UYU",
  "key7": "5vF8bhznMhTSWdfLRqwfzpGnrMncgY9cjooo6kvY4nPaXEXpFPtbjz7tG5nusmj73sRoQB2uZcpyqp1aAVXLYvXX",
  "key8": "4nFgbJkPRLt2WgnwC9BmT6GoAPtmPR7aszbjTjGYzpF3hinsLCG4uJWYVUYC5WH1ijm1aPtp7Vtub1UR5LzU3i8U",
  "key9": "2DSHXZ5ogytf8Lb14t36Q8YByAVjz75dm4wtQu5KDA2uLLkWze9E4pSoeif25G7PJk7zDDqN9ECtBcadCTHce6oL",
  "key10": "2udTbu8LcfCgJq8jXZoSLYyJuZk12tQ1hwLZvuKsQjhBZb7XpBccBq456jKjwSpD4B9SupnvWn1DoPzGEuB6yVYN",
  "key11": "2Xtt8z6ryHhM41VSVq35MoJHdEv8XvvmsKYBFGJtLDrDqnxuTXGdGCeRQuh6HRSBqq9cbgJDBh3X4zLFxrEJUfMu",
  "key12": "2ySNY8a5rXVhdJGX8e3YQWfPdqa3sUeXwxkhLzLLRQYXZa8XKdBWhgXan4RoQcV7XBSrDXSibTVJDEXDKuWbUWm1",
  "key13": "oSzptNRPhaezgkUxxQ1wD8JJx7trPFiQDmCDuTVM7kVxDsi1vzFRn28TYSQksswHukimRRdPxND9tRFyo19xHtZ",
  "key14": "kXzwtP1FZXrZtVfLc1xLqoAEkRZ7TxKxRGUgVxtqF1QR6fNUJNVxqJG9Wgjx3Cjz1NDT5zpJnkJko9dWTZP5MGg",
  "key15": "VLwNdTAE5zx4491o8RZt9TvXrKVbC1Bq4qWikWPR5KgNf9dofX5Yi19nYquXi7P6oAfEqahuY7odEF8JJ5PnpbA",
  "key16": "3qcKfm1kLVvUTpYsPqEJunHWZCJ6hNc8ApTSiDpBuA9MdcQuVEU4Li8vpo44pNQVJKaroH25GRsSk7jgFmToGuia",
  "key17": "8oRA64ML6nyQaR1SN6TMYXdkoK1cDmzxXzLudNA7ZhDC5AnSiETQqbkw6U8n6ogCD1gWaZ1e2j44HajrvuifZKN",
  "key18": "3DqKVN9K8Zx5Mkwg8vrT7u9qR7fFBUw243fQiRexzEeUHpZFXTgPXXjB4cur55EXnC2LHHmCNSkVHMRHJVJYibyu",
  "key19": "4HhFTnTNpNS45AcGGwt7Voi1TyVtp2oLfQZXnk1PCk44jhcwX93Y4AEaZTfbm237ezRL498AMv4b2GSkBrosmTVU",
  "key20": "38oyVCa9MMpo9i3NWEqV2ZbMnmhesxmuQ5FmrvvFr1akneY7nv6Z9JvgrmX4CNei6Zyyk6mUGXJHqosheuSCPbA6",
  "key21": "2G2DySLKo6jvWTAuDBqpbyEa7KFkf59T51qiBogPdMC7VsRQfuvxfyYAnwAXeywrMsQ1ZjFdouch3zWf9fcCnEDd",
  "key22": "2dbxg4qBgJTn9ha2n9PFngdziJrv98ftPgb9y8WBTTQtEzq3r23qU4pdkLUExv44VB1y9KHG8xUo71kzRHy2fHJ7",
  "key23": "4w4Nvu9paCYz2dGgTiT3yYhQ6j1yAmHFsSAr3ea5BtDZDer5n87rwuZsn6vGrEvrVirWVkaEAxSyCo8jj4t9gboP",
  "key24": "549jF8su9TmVYofpCEBwAtmvzqXhcUuaF6mXKiFH7avPfvLDx67ZHA2We2RZANQ9c68ut4SnTrVBoMaeaLPDncm9",
  "key25": "yaGDaVNUehwUaAt4hkuXxcdkFbBwmoVExpLRchgeTsVh8ecFsGuR4JDT3hK2hbs1XGGQWYBuagXo5auAZMejnuX",
  "key26": "3G2ZYciNE1V1m1NbWiJCx2RnhVW2WYsiTYeEHFUEx9PyqDQKWEFVddVGgi7DGikQwsyJGhxH2BnCEyqZLA33kiKU",
  "key27": "2sFKoofTUeERyAJLQAxXC3Rmyr8RBBEKcvnpSP251rhZaWoFCkqbTkXiFGMVgtz26Ag2ykGX9QgppAXrEWfTUmyA",
  "key28": "23SnY9VS13AHtKM8X1mEocSTWS8XXUALmgpbPh3rpe8mJQSm9hMefmvp5cQaXbQd9gtmAWkuTNzCMUVP5A5vKspa",
  "key29": "5HBAo4G3gbHeztCx4syvRxnxDgzzJ47KoK4zFhncnPSpFtEVeQkxBLUtRQmXjAM5VYUT1SdWgrL5Rbpzorioai3x",
  "key30": "4ZKRazFdoaZPUUidEEqX1ctTVFze2Ev4oyivXBYV2uYEVdb7RP9zEgzomjUkV3qYPm8qinCqTsmxmwBPMf9fpoeL",
  "key31": "2yHeAVH7SiC86oobeEUBdMDEFWuxmfwdjtPbrG5pewpMEkNY4XLReC5RRZVANyHvfJNHLTzLdHtRg2bmksULERo9",
  "key32": "5QNhqXggxMVTrs5fk8q2SsFpxUf2EYHp5xnbukVyaJo9LNSqVhY6bqpZb5oeSXEhhH5F5vS8Tsuna12Y4LZyXGvV",
  "key33": "2cjgGuL8o9E8FC3hqQupasdv8zmh1MzMBevpPox6QzY649LCdnQJ74FBF9JZu9KG68AHPAfZNiLJzGT6LTaAy1At",
  "key34": "5ANZuNQo6PvZRc5vCNwp9U1UQ3HNoGvqnujEw5cM2cnTXPXWPLHBXbxL6y34cfn7wpKfdrWX3362fh8dGgRQjHi1",
  "key35": "4mUYUkieasPxcVBMrn7aAzL2Gz6uhd82sb65znwNLG1Ep1R8PTzrrrFCfyincHCZQ4RYniPXPjfpok6bzxDX7TLj",
  "key36": "2samjjbs5oXDXcfRYYJqxSgddHvXb61mQnBK6V3J3nQWjtvKmDUJhyuvwUffLetxfVmN53t1jPnnBotNx1pjFcSf",
  "key37": "2DNF8bNYSQ1gqEtDaxVvCHzj2HFQJYRp7pSXAzhSfrQdJJYnsrs3FPwJ9oy7UThdWJ9vamswp2wkuaEe25ydgCro",
  "key38": "5A6hNDMSmwdHynxvZudW8cpSKHSKJRKgkUnB8hXDcDUKbTvUpvs44JPP1U9eZAeYuWx4fChTE7F7f2LbdGiPnMAY",
  "key39": "57USPdpjvyncyBDrxAmVQADGM3m9QoKa9QAQQYuoferR9dwnunmC6NiZaCJja4e7q6KuL1x7BfNeprKerz7CNsXe",
  "key40": "3GJfemGZXo1jnjXtDjJ4noJyRB7GLm4sP8mavVMe45X7sNBRSAu688fkSijysrPLKZfJR5RCR8A86qp53X7URBsB",
  "key41": "2EmbLWMUT6bY8PJuFqoqcRNcdN32pLSjNv6ZoZo2NfXR8xakCZpV2BtVyLgPbQ2JpxbEQJLvy5KsJv44sFQugQpJ",
  "key42": "3T7h19esoEvYgQGDEww9w32Zv4ccX3afgA66LmhAMN5my9F1YuzjDtnCViBqfRGKFPEawDGQdnSe5w697yiqo6Ve"
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
