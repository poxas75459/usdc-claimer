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
    "4QgujducvWbeQHuj9wgHckLbfABaWiZC7V8GX95X4QEwTXGLhiUew4nFtw24yfcuB3jktwqJ4MT4pHs2pXK6C7Pt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42mWfFJJFC7W8uuMsRLGG9H6YbxVkCBJsZ66eWYnXdmvgEseTHUs8ysEjER6M7MdY19oUk6fMAwkFPs6sjXxFepK",
  "key1": "41HEVhWrE7cWDyXx7woZue17ywzjJ2UNUWyuQyzKeBknn2VgaGoygGdpNjNwFGZeaQF1afhHPHa5hjxi8ur3Zq1Q",
  "key2": "2tHGCk3j1jSowk576veoQDSCdCtujKXwMKBXxTyXSrHKbo4VronVAkrnnkNAjDU5mX5pNvXLQCLvtpapXYEHZ9SN",
  "key3": "295hh1N7MAe6jzDS1zoPUFiWBjCu8BzN37nQ6vQDGJAGbUa8GN2GV7pf5NxDK8CBZXW7emZ4Lc8YtLUv95Y3UmQn",
  "key4": "2yDCPjM2Njzoth91VNFeYK18hJT4UL57ZHecTiBBrQQFik2DyaRN1keEJvyMBs1YEcmF7eK6H2nN86H7fNfg7w9B",
  "key5": "3gizkQ7cgfVrjDX1LMdN8Z4b4Q2UV2UB4vt17mLQD7X3jgaM6xAYgV2oL4XuNY6M8DUHssbsmHVojQR3w3DwKDVe",
  "key6": "5Bi1CNYkxo7RtWN6zprFgsSAHYwt3MJGW2Jmora2wmscBUtjknxh2Nq3u2VUVKqQF5LGGavD8rixJkoMSRUAGuzh",
  "key7": "339iUep4TDnsFgX28vGqx7Nvvsje2KAwvwYyEq6imBsxHZuLUZtaYMvA3sKoVeXH72C6NqcKUGbWxn44nGrmM8w7",
  "key8": "2KjmVPLzW7pP5BrdBW8qshuPPvjhqc22KYsQecRG1MUQzV2DGHYEwsf9iVYVZVR9fLwdegsaE36YyaaDoeBJ9tmH",
  "key9": "4jYz9LY8Yic64ewqYRu3uem55aCeQXX3bZjrUQbLaVnqV2WS5sw5VSk1PPDafqREnAJVtohnDRobviS3DRcrhU4n",
  "key10": "47aLjsJcUD1KsTVjKC716SHQxLjTP4JHbxM1CEp2gcDg9Hc7PodMvZPVzu74T3WScoHGWQBPsKsVLaUmm5pseNmm",
  "key11": "2DW9vwgAJcVTMSjk3L6KZk5TNtRYXbDYdZuiKrjidXTefRDZpH4uY67efhSg3nT3NDyVvAWUYScFcmbYE5t9LMva",
  "key12": "4PcMtHA7bE4xxio6gxSfCs9vc799Uzby89KjZqcukpLQCA359VdgNxFgiWfqSYqRw9pVDCpGHPQYhq7H8cj7zfgL",
  "key13": "3Md15sRYhHAhFwvDQWStACjzrk3GxxLgquDkdD2imrCoczoZtpP9w44Wc2jm7niCiJigcHABWRnU1SRSc2Vm92sM",
  "key14": "fD4tBSGXehJQpDcmmBc1XShcVaBKTzifmX8H7gHXn8QZ9J6xyVmhRq7qy31Kj16XBAhqpdGJxP31vMRU56rH3R2",
  "key15": "5imuhvnhuhXWL4UFWioesck7Rk9wH1xDCDU56kobZNxhbDcRgp2qRDPEBdEwhBghQH8SHKiq9Cjn6TqWYE1Gsr4o",
  "key16": "3h5ZRWJfp4cgbB5zQsrQk3CjidYN43vJnQjwPWyGijmm4AH2wJ4V2UGZSEDKxAqYBjpYF1eoi7boYcagUGo8yQC8",
  "key17": "3RBGEMXHEEyWUCa6fqRNVNXFZofFSpAoifc1G7SuZhUss2CRfDmCuxdQBscN7LcdyFF97diinkXAb1fRHvZHU3CC",
  "key18": "2YzH4NuWrkJaMG9LRxdqqXZdUSbjEKoX4AHvqmNrJ2jPTSno7U3yUW56AUpYXc8mxBRG1uSUgZhGfWwd99tQ7phF",
  "key19": "22X1Ub7KwA8PCtDge35dFmqHFGszwH3fDeXcffNCNVRMuHSvKoofAPihkvNK2NswQjG3XqsBzBjHWqXFR6YfTeyc",
  "key20": "4xxbCfTApHgPhHkYRKFPWWv4wQ6dWExtNfNT9sWkJ8iuMk1mMZ4No3qptDYqaCiWobpNLGiN2Vd169qYHUYybWwa",
  "key21": "WCZt5nPSne1T8Fg7Zr22wsNJ4Mm5rEjXLwn1NPbd2YVfbULKmhtJBQEsfztKwr3CVB4mRr6Pa1utWsYfupj2Ldk",
  "key22": "3JuHy78zT1HKChGuGkVBnDTEvsbR2BiNCXfRbdLz4Z3gUrs9FuNCU7oQsTbcobkpndbZvSRJQDgA8bUvvsJ2n6BP",
  "key23": "2N1pAoZgvXpcNRBZmi7iiY6ZeAvzD9a7EThefCrFoTuZx35X2kcCHJM47g8yJTQ4GAWk7YBZcZ6UFJqqahCaguKJ",
  "key24": "2ubQQzTv28yb4MgKvU1ttE55m66t564R38UXKH3sjQ8FhgrMLPt9SgLWjojnYunps1seoiMCZBcFkLxR6mpxqXfV",
  "key25": "37dBoTUuC8Qg9xbRpfuQ7fa39nVwD3mncQMSp8TrH91BVxadwiDfvq655LqQwYyQio25tyzrAJZJNKRYQLX7Uc7W",
  "key26": "5LPhS4oVHpLBwnudxDK9zzzeK5i6STKZTxw1UxcpJB56f3zmwMSXfe1f7CEYTUdkrJfYRXzm3uuHbUkzikNHNgzZ",
  "key27": "5s5WFzr4ZJHxHY4UrCTowaWysWwtNiazAT9hfQ5DPNgmNU2qwGGnsTr5enh7RLzhuZwToMtTK8zHqtXrYVKDBjbE",
  "key28": "3oGRiDXHdAzrvwan6YKaesgo5AYf2VXD8hYb5BASCSFvHA3aQJuNSF5b1GGgjyqtqCTDvv5WhnbcNgGRcB3yZ4Dt",
  "key29": "2n15XhpYfchhCp5QsyHvmP5JHn4YoPMjDYiC7B63pea5hAp9veKrXtNj83TeW6riiyBV7VSVpQKwq9aDG7hyp4yN",
  "key30": "3jrApqDJYqUoxTuL1ScgxyYeTqMeAfMAv1LZ9UJMJK5s1oB8vCFxz6aQq4kHCujoJnt5zvDjrZgeo9cFgzsm5yDj",
  "key31": "2qqMXEX42wXHgdFohRbYLRjGXV4GhapW86SL7HQX7b5XvjtzB1Ayt2D9ZpBtyJibJavPUgyPYY2mkJN6Gcajg381"
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
