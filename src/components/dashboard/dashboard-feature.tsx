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
    "4UqK9dsVG4JmW3RZGUcnpQcQFVNVZxQGJ7NswLQLLuomBC4hYChpjLZ26A74pqPUAM4QVoTR5wEK22wdJVJrkP9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "igRacUVcFza78r13UHWi2y6qd6Z1Z3MeeAmsNXBtpzwTmfsVGJfMFFm4R6AHTU4GjwvYaiJjFu1STJU2ugtZjmo",
  "key1": "4b9FsLi5KFJjBUe1WJegtEDYZGJNe1iPfvtzwaLmYFTSrc9q8Rynm5HubmvRrSvsdpbAuZcFTWuHGRUiGsUvDmdv",
  "key2": "4bHwmGRNoRCZmtZPhdj8E6nPxqEEWndw4AjizMxuYt1E3Sbnr9nwqFknAfYx4Hbw2jh4WYLRB9Kb3TCksfxn96Y5",
  "key3": "2pfwgXjrFUXGYRo6RRqnYtsMNzsYvM7X9b4JwQ7KmQj9vMZyXBAS3M6EdeAea8ffWtAVuysj8FCVgiFbC1uPVeom",
  "key4": "22FdnUMb2ZizZegmXDFZVGoiGqfQfCgzbR1SLDwz77kGhvLrpvw8crYg2cN5BxSJT1583ZEMHsYZzhk8bfabWuTN",
  "key5": "2deshu2pryjGxmqrvPDDiuS7M5Ksx8YR6bfAqTVBYUmFX2iEtbPSVct8jFRxrcmJ6aZPZbWHEbN79fEe5DiK5VF4",
  "key6": "GNVwD3Zr9ijVFE3gPdiWvkmBetF1cKB5rwTvF6AFGiAVrxvbvaboGDqinM8m8wwKeyovtB9MUwViLyVs4B7rWxi",
  "key7": "2Mo78CfTYezdBqpEJ1mMygp3FtsYcu6xzzJRQWn1Z53DEiHqXpwqtnc4gM9XYCUqGR9B2ytwu4ephuDtmUw8iWEq",
  "key8": "4CyLy4yEZ86mhsz1eq8SgVxZ9RqwugQHDQazYLZqxCwmGQgD8EJ7H9jsaFQJtHpdZZM8EmbYBJc2fyipN3ntQZ3H",
  "key9": "2u27oypHfranpFQ4aRzhMCmvMZFteNL6vxpVDCvfDgewKTBEQnV8G5PFcZb7HgUutgANHXH4B6CBFrPX6Cbu64m1",
  "key10": "i7cXDRk2S48WtDifCep1h6VDHEXsUECZw2XjGfj9t7gprBmFc4xjQ8dXD3NugUt5AnHukr5aoH4FTTT7aCYm12b",
  "key11": "2iDeWDe37TfupXJ5pHQsUKEoQn8M84ucLFsB4kMSzejvwao2vbocEaUixUkc3xwTZECD7fQeNYaWy14ZfPuJqWub",
  "key12": "bBFCvJDyVmjcFEoPof4hFxMNNER89fw8KhTxCgqKuFS75nLTzNWaAerDmzp2mBKwVRJ91H2jpXCGtCS9jSyiy8s",
  "key13": "5SBEKD9QUrpXddZQmWQxV84wAwbZLoXC9tU9xK8CVGfgKPf4j8GFrTP4rAi6mi83uELV1J1jtMUD8etdVy1jTRiB",
  "key14": "3ybTAr4FMVeSC4fqaRzfGpUbswTbF2XGz12zFeSJELfHm1dvs9cnfwPrb5NAW1kUSGjJniikNBay8MRxC9mwRf9d",
  "key15": "2wWSfapHwp3XWRQPH752T98YSWNYx7euYRAuvTHXx3oayfaDiqXG8WMAgq3ydcETu9VCvEqbi9GsiihcPb14R2Cy",
  "key16": "2h9AiLkk9vRv8ujzTd96p7PWJL3tav3je2zwdV9WPN6q9brrLSYb4d3rbKTd4hTF4j46wWpDi3fkajSKWYxHUL23",
  "key17": "4owzm6vGfzu9QnhsAJhMqiLSMsfFVb1dw7cY9Mexp46p9GmsomiUeWtsCtyupBQtbS5fdFnbiJDJykR3B3mTBhic",
  "key18": "2GRM3uQ6jyPChFZaqBs7r2BCNpYBbeGfMM5PeqDgPoPZ1eMDEyaRvqBmjfk68Zs7hHzssVsccpo9DWWnnLNyKwDU",
  "key19": "3fMn9tLH6WbyB2krcaDVpdCKmezMxSTE7fPhMWDWSgJ2UWmoZrDntgWMHLPDZj8pd4GyBTZqFT3ucyKMUE8kxVDu",
  "key20": "4t2gwNYiUgceyWdCAs7oRD6gN2VkEj4haksEHkSmnvS5SYcV3pf9sjtaPfTTfNCQ3K9nmv18qz6Dvf1vGQZm3xf8",
  "key21": "3WGtZg2n886eCwpvXtnobz5bybJ9LHvYaBUYE8yDShXNNhnSsVsatbkmEpWj9kMsUoJJkCFQW5fqTVaHuA7ninUm",
  "key22": "3hwHTTeK1sbtXkUvSHQyShKSAqg8gN6frGnjGrGEh154ebkSBodycWzVhRoGGcbYVswj6PyctZsMkkp94rnma2rn",
  "key23": "4uw41br3oJXFit9vsKhmXHmmEXe8aQhZHBLzyBNtgUM42LmhG1dzLxv4tzVfbxRorcMtQQHCbHGkVf4KFudCMUo1",
  "key24": "4qoKv8LSQjsZc8DJD5j9JXG2X8u7CuRGy3h6M6xUGSLAvEZsVX52hXzEWyi2EdZzmbH7VgCfxs38osboh4ZPQFfG",
  "key25": "3gmdcyPW7TzM5pPh1YErFRuD7sDQAq66ghPa6P5rzpqefvwdu7jJgGcKP8k4MvJwVZsvmUQKUb95NpSDuF2Wfnax",
  "key26": "3GduDMh4sN7Cvpkq3HZxS6b6ddUGb62MwWjCQN23V7yyyA9R34euZaXnNNeFu9TRg5YaewwznTu5tLwLDFZ7r3xQ",
  "key27": "294iXYyn9qR5KyHXegKPwzrDfbRCYWry33mkePuQdx15gHDMJNJuTTKf4p9s64ykrAWpWQ2XwPBRZaTvTAWsJJeS",
  "key28": "UdGDgtABGxDzk3ZJNKkj52aPC1BRMUtt454ECur9ENtGebmF9XKXFUtUfsrw8z6CZ5qKoUvHHerf2Zg47TMBj5G",
  "key29": "dK2zP4TyHc6t3dSnu9fgRL4Uf2MbL8QSw8m2pAeSAskMmSaVGW3yya8VT35hnWyLbmxpsCWPqb8cNzvakKez5Du",
  "key30": "3XqDEnSxEQ6AacgYFoDHHgyCKrm7kXMWJx1EuUqSWCURtForMrdV6reJ8R1CQJJhkAGcH3B4knvMWmFfY6DA69KS"
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
