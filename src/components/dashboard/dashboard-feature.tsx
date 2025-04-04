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
    "5GyP8nZ5JEa3zAJNV5F7NLJKSkeiSQnQfgx7dtiemBZC6ggcFcFLha3k4tuqHfENbPMWTzJdmX9JsibWYqHJLiPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UpnCHU84WpmRs7Mz1rUokV66zveNBmJN99hNnRDvPiUxTaZEpjLHNgM3yMA547gTdG9FoMyabRC6eWCs5Bvj2h7",
  "key1": "2vxqMHZSqnSqhgvCPrVnvCfkYR3GnKs4GqfgaawZGEBryLBCcYBeNn3B6iDn279G13RnZ2DHDq35PeP1Zk61VoYj",
  "key2": "Vh2Bk5khh8hmo54N4eKEX92huDmU8QTYnfRPoWZDbYpnkjQEBRFeGzLm5nPWeVTEEYyCiDjvCSHUYz6YcaUJJst",
  "key3": "3Hr1wKEpFDAj2G89ZS6Q3nSuwAGimZNo82yqQe6MbQeynEn5ihrZb5i2iskGVV5kZnoR1TGkidg8zXfKxUQw9zs6",
  "key4": "55sRoTrtyFEWWnYiT8sss9iQKxSNMNgpduAH5avkF2apXy92KYMo9YnWf26BUj4ytnkqsZkKFndw53qLY3jAfJ3L",
  "key5": "4ULWfjgan6qbdVV9MUpYiAJz3kEPK8UpEn3mN2z3mgFPBP5YRW867P7oSydirwoENvXbWbL7L7kwLn2RZj9Nm1zd",
  "key6": "QBWqmfwyrd5ARDy6ZyfqGP62ZDCLoNK838JPKXPBqF55tt6orwi3LbWnFdUjXmo8FKQv7zAfBeLoW9kBqv4j3cp",
  "key7": "4o9WrAQE9QyQBa8Z5LaYfPCceeeDq99Lps3U1q92Lgvhe4oB4XtrCECspnHTzHra6MzJSCVPQ1Hn662YMquaHiK2",
  "key8": "4QtGYqVTGMoLaaqxKWgJHi5LrEDMtTcw3ctm1kTnMwCyYJf5VrYCUmcprnmTEKYsz7bfHH4Az7ab99EPvbuJqMt2",
  "key9": "5JUf6Y5nsyq2omx3N2adqZPTfuR4zSVYyMM9nrtxUQmej8qwyw26mDgL4FAK9sXQAFYFDbhkXbpFGsfnKJShv9WN",
  "key10": "2B9ayzxRm1nfDdgKA1sPqptjQemyD5cVHyvtM4VjrzgSAfRUAyTN19BUV5bSuJ3Rp26tKS13YRbEUDxNMiMTv2X2",
  "key11": "4dwd8hPNUoMD2BJdvskb9Q6MMpNbH58LXWmSoyBpvdBvY7PSz41D4PGBvab6yS8rvSMVgzxsQUeMgnjrPSviTwH8",
  "key12": "5VE2bWLPEsFvMJTJWaQBvRpEKim41VfgDhvKHuWyBqJ1sx9XXuE9KTUKQDkcLspCZz8DFVkJsa9U7VRkemCg1seZ",
  "key13": "5UJSTiKyGvYi5AU2DVCFNwiqeF21P4oKYmyVdPfQCfcBJis8MXEEvrzVoRVoEJxtNWxuE4MPiBBdX6moS9EKqp3d",
  "key14": "5cBtbPVfSEAoxr6JzAurmhs1H1cx13LyfRXAwbn8t2nn4LuCSTgrmRexQgQCv8ZU7wMZbvW1a6sq8DD1Q2xGgyZv",
  "key15": "51geg6TXW9GFveqr5w9Ju1QjL2DmKeRvvqCigxy8jDSar3APf8F8ztEV4tqdQX4wu4f4MWgVgFTvYExSn42RV48v",
  "key16": "22hseLdKYhozaZHjx9Z4r18V4h5UWspkiLAK4ukKwFyP4PZr397f5S1btNosvEMvMumbmQVTVMvCvfdjFsPVvUh3",
  "key17": "4j5Q5auSAFxeibC6odgDK3y76HrjRA3Dn5USKKcaUEUxWAT6EmZLiAaSwcjUzqyFDynizaQkZDUTRnijWAVs79E4",
  "key18": "59W4Fy4it2y9vD2tbDWaJJCX2Siz2umnDWeaWuiRwFW4hoczzoB4LLZkPxwb4Wwaa1vwsZwaMWJGvtujk3ZMvnEn",
  "key19": "4vEtUjbgbmrbB63Wb99uDUJyUj3pVrdkTfTTDDbsvxoPq5TNk2rGbzC6V5WHnEnocXJtvQ7a4xSTLzXrh2f5igGM",
  "key20": "yb82rpAK1ovLceRxvKo8FhNP12m8MezKNWcVKJh6stxjZ3duZtBVLLSM9GBmcCywYeJGBv7cvxG5GzPzP4HDg4R",
  "key21": "NNQKSNfkesWrztr7bKDaLZPP4vqhG5tD9wTj19SgBREusiUvo6f6k5yHrB7r7aYpCR6pSLBR4Dosg3HXESvGCWb",
  "key22": "5DU5dCRmFjCmEjyxe8jUfjwP45Mgqo1x9LtAFRycWpz9TME2UWnk2ToP8SSjdYsSMq25RgkuJmKvh4uPGzoLrREs",
  "key23": "4pyHcEvMNYaDA5JukJsv1QhdHAn1FgfveLRGTUiR6hgWR4DFkUe6N6ffhq5Z5MPZkGX18v7NDQ6amPw2qJxY5SM9",
  "key24": "D8XUFij8rXaFcTghGt7F4rjNr3yH16xRArQDRZjwvCWxeSWFKjzaSevaZ357H3x9SRPiY8dvHyFSskxQcoFL3dT",
  "key25": "418y13QmrXDx9bFvL1TsDiN3pNTeUhMtKrJxdVdRixcAg8AKzq7FAwZxwwZGbPTZ8cX1GEYsgmHFQPuuTzZPYpiT",
  "key26": "3fkT9Ex2jBX1a4nt6dY4qQ5Qf2zuVA8E13f3uFhQsrdYW3cw58BLdf6HJ7CeM7df4NYyJLwLTZFk1mCYGomKpnW6",
  "key27": "3kA3xoWAUuN3aRuT2tVqjeJSmVKX8tUwMpP7QSKBfwmncicKzynyQYGz4VjF5AXjAasUJeRijSHEoQtArt17GZF2",
  "key28": "62kfC987kcrJ69uiaaYkHcdiKpWxcqrw8Hon9YnpGKhsWy36iiA6k5h4NgXNvX3rRzGjgXQPBe33BKvQxno3yP1Z",
  "key29": "yiSi2gsXC1AnUrMJMehKN76u5s7XiTcowGP3kzaqJ2vEb7nrjZhTPmArPQjtvzWoHurAYX7gmQJKfcUahqy871H",
  "key30": "5rJL5a1K32rt44LAtjY39gWqwA34sH5yfCF7NPYfEsRa51fbGvXfWucUK9FSa5dFPVrGrg56RCBiGutQF5X15RSe",
  "key31": "2d4YMPWMD2noD3LnU22s9DEBMV6ZW2oxMXab54Tgm86M15XoCV8ReLoQXWMYLAeJu9Zur5RafFv9rgsMfu2XStFJ"
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
