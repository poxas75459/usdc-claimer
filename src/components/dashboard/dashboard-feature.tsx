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
    "KPWiSSJnFHDxxcmPfwVuPyFYq3gQodhgy3qyghvDBzM8yMfXFw7uGiapFjf3Ka9dKhGQYL4t4R5gh5FPkzoeAVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w3amTwbtjAuCcxsLostsfN9tydv6TzjzffrxjYNQVZPMKDsPERfdKcNvr9i2SNuLneKTMCDWJpeuzERnRHzLah1",
  "key1": "34orhEXkFC1Mn4dM6T99Lgp6iDsvSTfz4LDtUZ6QyGddAmHeYiRw8agnQSgw9gdCAuxNzWoPJNvtRzB7pAnDcU2R",
  "key2": "3meWMQ4dArj6ijcbvtFjGm1UX3bn8mWafeyEP7nHfhPV2tmHjkPQRjDPvki2k5YW5BTYDKY2jTPTL95WxsMZEqki",
  "key3": "65u5Wsqdt1bp2rSQEvQk9yWLSniR9KYSGUkGRAx2siWi11AcjtLYT7xuqL5Sbf6z9jufJy6UteW2Ze6HuuNRGd6d",
  "key4": "3zDwUkUWQNDvDWeHWfwQ6p4CdpvjrrjzVPosxrVmmUMpNhVhztehcz3TyMoEY6nVbJKcMgCoM8jeVXZ2ZPHd3xho",
  "key5": "4nE585AFeZGfVtdCpRjhQVPof3MJhJ61V7VPAcMs6M9AhaRjnJDoumYTpqhT7jUFBgrRrG2xMexsemhbwqFiNrHw",
  "key6": "59FSdRbmsSCT1XWfG69sTVQMJkmRkLdpTDSGMmrBKdhZrs5MvrXDCC3Z9dkJKRVoKzy15eQtnYStPZqBcmjbLSvn",
  "key7": "3ynCeXBM9R18haMbitWn1z14g1sfBfW7wXqCqUUYGcbDibGwghfJoreiciyJdAMMJshfqqoY17HT2yf4hSporZ5V",
  "key8": "2W7pXxeQCeZasFGjeNNyTLGJgE8AQUigPbQ7qG4d1aCKd6Huz3augkrBZFDHXdRnDgQ1VQ5L82fQ8oArZNaoAgUA",
  "key9": "3eqkNTGy3GVfpndoWE4URFqR6H3d43w8F5KSacZPU1Skt35NA5Y1RH2CnY2JMUsRpJCW93ejwT1MQ8eWb73aaAQR",
  "key10": "4KU18bS6SpxccDGockSHwiUjZyGGGdKQGxz8FATrr6KinnQbLFs7MsdAv5Tk6GiFSpcnrkZRbTAv3vtPXprhbj2K",
  "key11": "2gQFwXAkpKB1kMUowhh2qAgU558rgk1eY3rYZ44KPbFMoYogAu2uGD3dNfu24JUKAk4KTN3RTYPioZSjUstTyxuU",
  "key12": "hv1yTEF3eNpHLLwa3cu5d8md44FuEmLuYrVFBUs6RixzWg5BcvCkjNDG3XyeANoHkXVxzHcZZkdYNcF3F17y6Pf",
  "key13": "5FY1BW34agBpEKTFWGQZMAYmDmFLkMokwAwxwnserPa4TH2zymzpwF91KTGHmzvasudYmCR9XXqwcNoFWdEQkDRC",
  "key14": "4ncMXx63dHpryEch3V2bwW9MxfrxXvB1ZcSxizod1xaZ3pDnowa9ThQjPMw8hT5JKBQuhsgwb1SLNFXCcvEBhJNF",
  "key15": "5Pw4fFGJ3dMh8HwcUzjNfE78wSS2ahCSowYVxAC8gDG6oWDdX5HJJhARi2dZx5X52RfezyxQPCSFNCmBrHRx5mKW",
  "key16": "5HBMN1QfN7Un8HqQY4RkW8NYnUeNoACsq8jMez58LRjapBCKDEW8feS8NDxksnerPR24sHg6U4kAnfUx8K7Nm6Wu",
  "key17": "55hEsBct328dXSXHK2aaezGoJ11id1fhMFvDgmzr2xD4RvgxLNu2Buq6WPv7vaCigD9B2JsEJJjVjHAPuJA722gb",
  "key18": "2byigxE7BjqVmiTnkEPQjBJYw78wGUNKNVa2jpwXRx1bRVevv7HyqViPQsqSAo2aRaaxvSGWw1wGE8QN9FeBcqR9",
  "key19": "27mXsrFAFrNaCjxiormiwmQk6c7Rkr9UM4wdEHyFCpJTzABcht33Cakqx8VGTYfVqigFbb9Z31tSJkYLtDkdexWD",
  "key20": "rEPHaWqNmVNKPzeQUys7sRbMQWMgR7QP3zBC4HoA3L6P3bbH6jWaRH6JAx5KykWff6qxiDpz8WxmuWqE34SvzZg",
  "key21": "2TQN7bNGtoqS6wGvjtEdwsMnhwNQfgRr425hC6zrDWUpMBjyS1a762RtFrf4X1HUK6ZwQxwRKHNjaN46ZFWBqK3x",
  "key22": "5y6PNtRH18Ee7HKCj4WBny6j3LHNzLm2dsWedBWST1HMccKQdREfoFDgif1affAEbz3Dcx2DkgmQK6v1bBen6M43",
  "key23": "6626EFwcbAkJCa4ZPoFEEgqJe1JDayv1tnXsPBRESFTp8BY6vrtVPFQRj1HdcKKiGUfL32CkT5Urr8zSFjhy42iU",
  "key24": "4LFnXHgGGWHttqFx4hBpAFMkEZUpq29z5ADFqdEyxYXLeBVKxjB7SS1iXTvWkNbuY2sLDksPBiSJcs68XCHcmdy8",
  "key25": "4jQmebRBU75XS6sYEYaQzJAMBWdatYJyT3QQ5V1Hv5dyqJyRxJ3iq1WiCy7hmnQzQauMfxojRSDoMTmWJ95Fne3p",
  "key26": "25Hv12HcABxn9mdo2orhesEVNaXSHhMsxPgBwiAgCXHGGiaZSn6fYe6ZVpp4TcYosnGrNYyLUUPzkar6Y5YiXFyU",
  "key27": "K1Hb1RLRo73Ec8pi1JYYqnUgX4K9Gar7j62jEBjLS5K7EodK7DgU4wfr7B4kC6bmpARf97u1xaDGAGcEKNUbra7",
  "key28": "3fk1Xh2Aw8PK2dsaKCyxj3R1RAbGx5u1LCoqM1TP1V5Yc9FtiWp4HwTwaxsqzM1zYZ53AXzk35LNvQCr1LnUr1ap",
  "key29": "5JuRxSLnsBJSPd31o8yK9mRn34CZiNG6gUCVEu4HA7xpJvp6D26MzMp5sVVM4nHYpr2Mus2LSrE8RX6otNBQvuY8",
  "key30": "n6vDrxfZBn1ke65f88gLykGMTM6JmMuJEi9dA3rAffSRJZWJCLAvAgqpmAnmA4KvRnLm1DTS8mx7bz8RcSFQtJo",
  "key31": "4u6Eag6eXhRfZBsksqUuB992RFe7MitUfoLxU9VcnfWwVjhg3jEcUp9EQoVWF15D9h5tqG1dvE5hBJPZM1ZzzFU1",
  "key32": "ebbPdheoEJWGyiSAgoN5Tj6uP3pKJvEgF8piNjCVAdvRwn5GVkDdqW8kL8gZMUsVYRRj54wth9HFihAQqgZjU5e"
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
