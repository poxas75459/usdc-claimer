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
    "ZXaPEbXHhHjxu2ZpCHjDR6bsKreTUMHq99kTECmGVgo31GHSwhgnGjTySfwYHPGZA3RVBeb4CJnzGm4UYrp3dty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TAtifMzX1Nu7QBEjCwuoMA1igyx27PADExUPaZ6GpwCaFzQ3wFMhaECrsDp8yG5tCypFdMy2ZpanaK9J3jTMsVs",
  "key1": "3ymHG21gDVQ4ECZmei5pcs7h499LckBfQVwHXtWbDtnLCMGpC9bQoR2eqA21nRCNTTFyJrn9QRNEW3BoAG92yCD5",
  "key2": "5RMLFewhGVgNAdHdESBboZnv3k5s8T4LV3rLxc1xqswSYuYWy7ydhwMm1deaoTc7FrReFKVTcpczCQ9Lw9ixKQMn",
  "key3": "2xCC6XZs57yPLxW7wtQzZuTRHnAo6BtJUWRXtnDEP6QbybnUt79WBUxsKBTYNBDCXYtJNmcPcSQ5isLTAAWWLp79",
  "key4": "39NZFndQYTrEFLsWGL7ofBybyr3xQtsyQBeBjMv3VTYEobsS1gRCxC8vNZNxg4XMkEZnmiUYTXoGVsYhQjZMfigx",
  "key5": "nAPjZCHyVi2ZdA9tPHSh6f82VnB7SdrZhH7GswzmSGgW6DVbH1Mr3wKkCXr3W7KRVDo2zc5eNkFsreuzuYSJh4Y",
  "key6": "Vmsyrbx2zTz4CiRddRs2KAWizoPCTSpkWLdqLeYTcLsCdhRY9JBetGqD84K8oshZqXGxxAVh1KfHJA8tMbeDLHi",
  "key7": "4zHGpVohtcYNpdoECjxT2eD5y2VvqtMP5TJFyvfWMsWLMhpQeQ1sgsB9bADQfY1ykzT1uL5CWihj79AKn8VTiYZN",
  "key8": "5bzjvcuR6J2UYuDLEHKn2aTNY3D1UzhXz4SZENeKFA4CdAbK5nminJwApkcRNjvxUGiAvjnDesDSP8GxjSVsM67R",
  "key9": "2dZnC9VrtR3h62S252QyNnwgv6TmhNNa8aja2x5m8opoVg3DFj9XafaT6xSgSrm6rnAmvHTE193HDDbS9JduHXq6",
  "key10": "33nHjgyNTEQNshw7LmEAQ1r6WEqgCHFrZRYJNagoRGWrTwGNSsD5hN9di5sqnAuGxHSed1ChAdxfVDULECR6bhRx",
  "key11": "2x66oKKApCPpn5ZWpJ6YA7hMA9nHe89CRCc5VF88WfGpo8nQBoKqodF6241YPeDBbHwcAdbQVcaHXrrKDXzWd7nj",
  "key12": "2re4UXrkvoLYmfv1wHorauaFFrLPZLAcyWL123N2M255qwBR4hE97ceZJcf8ya3fzaQqjPvZBpwbW5iz3GcBL1cL",
  "key13": "3brAYT9AtpMg2jKkJRfqjyTPbhG643o5Zc2QXqB7Tp89nxVcBCseVC1BTPemJ9tkVqq2aqDCLxWrXNnNZnqfzbyt",
  "key14": "4M54SYPvvtf2MiJaHJQjoqMcr1Xg1cPL2VX1NodLF2M9skdYjdxHj68imzWictav1AkDE9RpgbxqcabWuWhLcW5L",
  "key15": "3eJuBDmkvYz7S8Epr1AwRZ1TuhJoAy3jSpg16jhWKV1AVsJJhKN6JLXbmGLEHgUxSva7kyt2pRiE2HWQA4LP1o2x",
  "key16": "4ZRSrW4ZqJ2fzFwkvmo4nqe4t3E34CqKU9CLv4Tz7xd4gbtGTCpp4kxcwp2FJv2zVzpXGWdEDJJovHewwQpNCb6r",
  "key17": "5Fe93g1scSTfXC2fDpFvDo3swKHCnGTpRrUvtRenbyqgsNvJtUVxkN4bHd7RWiwDdzBcfyzQ9499h7HCwn9ARSZx",
  "key18": "2bxC7rSn2hqH1XuL9SgVD9irjZcWy2UxvNbPyvfs2ERsLpiCCk4Yh5aVYGBSihNe7EXT2GtywNf8yczHNn3Kqbcg",
  "key19": "4RbaG6Gvb2F8FjMm2E3nz8ZhnHLCNurrfp9SGwweiQ6LKCm5KW8JucNCzLpPA19zZUz6jYisoT9Gak63c6eihdLj",
  "key20": "gpsKmMjX36nfWdWcaKqviZFMKNr7L9CWdTqZZJ2WBhvVCNx9wJK3TN29ycGnXQb8tAQ4aaN7KwkaerRqWfQtvq2",
  "key21": "2K4pSkBucUE894rtNCd3ecDTuamsrYCLFehncdXY2i8qLSGmidNimUXS8WQWJVD1NXWQ5s3oFsV7wscbSMqPfBoo",
  "key22": "49amF2vTDionPLxAFjsvTmg2rNfZud1gYLdMKoZ3UKT1Z7N4nbGGi6Uu26EkKvt428VHbZjyncfxYxLxRWQv8nSN",
  "key23": "42UDVjjB8jWpW51YSvDFn8zRB8N1YZZhzQUcYTYrpsxUCib8r4ubBQW7oX1BpnXMvJn7SgL7YQPqzFGxHCAs4Xum",
  "key24": "2P7XxYfccHKtoT9c5bMHtHmAdMkqJivWKvMTmYDJ4Yj3Ba5gGZhPfiuPWYpfTmoD2xb7X9FxgviuM1Ec8YH5DxxE",
  "key25": "5KtyWCpDiJYM22FVR64FSF3sT33NvzJbA6Xnc7iexrAZJVPxGYsRKefgBjXqgyCud3LKXmYXBWpdqFPDdDMKExM",
  "key26": "2ewQ33yYKDUzHAFXu6v4A1HZjA8bokpb5Ksq5W4ANCAzVCL43ogJSCeHr2w954mBBR1HFvMsB2u1edxnSmNq59sM",
  "key27": "4ZhAVKC1K9sXyWjmFNQjDLA4TdPLuujSYim3Xvsh4MvUbaBJc43bTFz32t7LEvPx25eMeCwRoGJKcG5YzEE34fW6",
  "key28": "NtvXFGHWEcvkh8SGJ91Auku79GV7Hp3uXpm39gZtGXaQMeUQiEvT8LnGxWTQWqEWSpLc9VzUHTbZEjew3iWi6Jo",
  "key29": "3Ubgos5P4RbQBxiMFkChAA9NufnigPoj2BGjxgScrvpdY9Cv4XHi4bB6GWFq1htnqMMBo7vYShQ8fZbE1GCviUMK",
  "key30": "4wWTMv5Xryqgfsi8RANaKaom53H5MoAku13quwByRzFXpoWZqpdKbYqcdKiRGSbFSVBVWGiNpwtc6h5HXfiFiFaT"
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
