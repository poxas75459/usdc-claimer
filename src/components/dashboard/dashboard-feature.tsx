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
    "EGr69LBDx5hLBSKWgs5YQndpikpXxZcoYYfRvjQ4Voo18gfvwnbGjLcTRLuaiza8ULj3kvRQzrHVECPLLETdVc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xQLcwb9BcZ8AAunyTaDVesKJ9RPRtWHRxMEFGwB8aVkDETBzrE2DP5uMbZyotBUsLeRbp8yYqDzSMk8RtqhpTwQ",
  "key1": "3sUdNgDUA1NvtnYvusttsE66QeTf5oR7723EQFwiRqLtyxrGZPud5hzrsbqx4As3HKFaWBTAzakKjSb7wfe7Z8eo",
  "key2": "58siLh6zSPSoMJVwwaVaSoqDGi1U4o1DpYyKj8zbienFFWqtJjRtc7Z5BNg9ZbUhVGNYXWBhGCnx5ZJ7EzTG4za3",
  "key3": "4qK9aS6MBrSAdcEGNPsNSXPs36vX9zQ4g4uRioiPFr8Ru2APP1Jh1j2TsKdgdyB7evCQuXLitUqyhKapHYyMca4e",
  "key4": "wEPuf2Q4gsUakHezVcK88wVjsVDapabYN7RaHZE9Mge65Mc5bveenGTdBzJsJXJNJmDWX3B79gn1ypAEvcEizpn",
  "key5": "coZkDMZxPYc5AcHNPfZnb4nyTLCrhdsoWLEBN6UNs99i1SmRoTgXadCAvpPRHxGpJyEJYyqKtCAUi6et5UGFU2W",
  "key6": "5rWZjKfuEL62NjvUBgKrWqPPuENCsK5Nc8fdByGp36qtgXeNaR91VP1PxpcPxH5cXKq76v8hNBzmEECmXCCJH9dr",
  "key7": "3HxWxXsmtxzqe8ekGkD38nceHewe2aGgyp6A62ZvLANq2AhadXwZY7pBVrZnq3r9UCo2RTpNQwUNRewhaBmqdj43",
  "key8": "2mN5P7aaab8M2RDo9G4v486zRF5mw4qLA2H6tU66SyGgBNwmAFrweBX59fNvxza4Yo1SCjjhfQLRfzJkNiEpFKyk",
  "key9": "jTu1jbb4gJdS5rqFr5WUoKmLnTxX2DjU6iEWwWcSVsUT7Tqn9QEKfSr4g9J668hUe8jENMU5c6PBMaLgyn1VX1d",
  "key10": "MEYEPssVwbEbyC1K1CBu9w5T5du11oYnBANaTjBa1GqJRjerQLARQMDBxDbjzb9S8f2nEqccexipyByZAdwaMLs",
  "key11": "2ss9xqWP44JUUCVhCE7jHVdifHU3AKM779wcc7ZcRwUx2DfvpbUtCVAdP7eK5mepBWJQj3tdCFjcRTMLTiF4kuYc",
  "key12": "34cLEf774VhZ16v9SH5pqripCZEn6SATGjThSZFzpQ4C8FKbgfoouFqFcsgySan6zoXnQmmbERWJ5HdZ7Pyfhbye",
  "key13": "3VcZXagGRA8csyDyUETJkk2BArjJ68EfKNw3kEZoEbn2exyJ389LY5b1SYUgFXyUavk78soNaTT1Q2X1z94Dcg2N",
  "key14": "2S6pTH7WixmX7znbZ4bik735oEuS5LKRdCzfUk2FKaGNQCpjWwCFTxphvYw4TGh4HZt2DzpKVWGw12cTZ8bo7FuA",
  "key15": "2V4vc6u1ZdigZ68yLRA6t25En2JCmR7ZTdr9G9rKUCpKKGoThTQPt8UbFWhq4ZakBgrBwKphELUSYmb2cnBbWXmM",
  "key16": "jfTq5aygFwsyqRccLcSYcdENjhDMN2Dwvvoode1GX9NhTian743dmNYacsR7tLf6hY5UDKjWSVkZozxcMVz1PA4",
  "key17": "5fkASVWCjE4W26He6yeWTpxnaKM8Vdg3rqyAd8HjPs7X8VvG94ZbRSBSdqHb22efVwRw83mxn8e7Dt9paPXaGGo4",
  "key18": "3RWEzVQMB8iN2jGsXzPko5sd3odzmjiWKNFz8uCBwphmDMHL4zkMMNJHVxv79MEmGgCbEKPFTUtz2D6F6Ei7AXW6",
  "key19": "2EcxhAp87k5zazL9fTJk53gYoj2KHwGKb53u9Mp1i8tNNTMyBFyyefTwwxYGJKSPaf326YjiGigWJrrrY7RhQPcW",
  "key20": "5fjcH6nB5uNKeDKxUj7WKVMsCgdX364GdfnsMrczASk53VEhbgxbzxtiYmdDsMxkhkvnH953wCpa5MAXFZKxactq",
  "key21": "2jCu5unmGTSoxp2sRteyoGp8pLAVJUSPqedC6RpGBZSUerx7mwGDq5qgGFUaLfWqFbdCiuA9d9Pn3Y5Jsx1b7uFD",
  "key22": "47RMCcoDDxu2xWvv3SqroLdBgMBQ1TuF3QQjTTesbcmnhaE8Ns1v9qaBc1jSBtQp2ui82m3aB5VaCcm7WxCAkHKs",
  "key23": "oasRSTGq5hKeJjDtqVQxcYj2WNQtW2kb3QirjJARhfa3A5GacmPMvFtnTWZvavoTNZG24uiYZUULdWgWkhbFefW",
  "key24": "4L5rZaMQATq9UmWhthvyu8n1cRPD42y9zoqFZ9GBjYfKMBV4M68ZedWhHjpRqFDEJM5fXopxQv136nUEieHYt4xK",
  "key25": "58hKr8T1tXLZgk1e5s3vPtHk1ceg4DLHKvtntrvYBaZ1NnEEnQeWxBm9yikLj39Gs928m3MHUkYAbJAu5TKSEHZe",
  "key26": "2jtswxzStE49WoNjX1xoSRDNiZHAQiz7qfEkR3Lx1f7dCi8BZeBzNHsdCK4i8iHjcMraAQBN6RpBgyPU8gWQG5Qj",
  "key27": "3CAYSpEW2scCGQpQh9BfFsaLMp616wEfiTzVpccaXoihdYqeBFjfQ6vJsGM6FCj4YRqF4tyGwgeJc6Myn7hm7s4z",
  "key28": "3x5dyJvKcvVuKGXdPVxNcerpqMrLRRDiUwk5bYNbdvgPGgiaRPVMEz6bFcFXocQbV2EmvD8yTPEeYCeMhKxbUUTP",
  "key29": "3L9qCFCYrLbTYiCeLELqPyhjE5qGUMhvRDTgDLzuDMPhhK1Tear7QVuiwVhR8n2jvsjnvG2k7MLqE5oUMXiM6eMm"
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
