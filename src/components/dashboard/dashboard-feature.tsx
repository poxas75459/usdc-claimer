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
    "3TTsiNea7gEAt1bEnEGg8i2nwdYbCkkVVLTuCfGhov4d7YLK6H4vpZUvLgekRrY3FExCMZKBXoVcMUYCqZeyq7XB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yZaWmftkXDMWCHEVnPRQxo4XwVNN9vFHHJS2rA12WAJ2nWpQYct3WBbZzS7LKUAeao6BGWULMACrqUzXyRHzryC",
  "key1": "54Q2N94JVGKPww214BfagowjY1SfBi5erRjKACdvZfZotfWi3EVNjN47uzW7ViSoYJnuxVMvDBDC51Yb63XzvCFL",
  "key2": "3tkWSKrYqPSW78ZpUDSWc4Am65MDEqFwyVQp6dTCa2sQ6SGxyn3CNqWETAMFCvJXeuf56kSxvZ8rEerHnYyGHFmA",
  "key3": "3YAxYV3udCeZ1vZt8bSq8MHf72z9CkQmtFYdu6RBYsHCosh2rAGwPbeMwtioffTc6nFErcfqsBKpbmn9qet6oUnq",
  "key4": "JBdzga1AFVQRADQ5G2o9i3x9c5wGvrMWxquaXqtiBv9Z3yKaPDTAu8fRD6xhRsZE9xJ9m2odXaQ69VYrhZJHztj",
  "key5": "4X1icBq4cmk4n2aeMjvDEzrgfSFNX8Yf5QqmbQWCH3E565xkxDGauU6t2377Sc3tmnWn5nm1qWr3Cixhqxcj94pF",
  "key6": "acVxVTETS4iZ9ZnEhwr9vRZRBhqeaKJDt8NjN7TsXqXR1YimkRTNQun5PFepyGQg7vMGD9o8LHaMXCwmYQjw5nV",
  "key7": "4ZBp85dwMWkrjyoFAcFHsGkNDvLmVMCP2iSkVHyQEofRgc2xFgNo8CMDfcuHbvhwPeVf2ikBqkKfGjm956Q9HfJ3",
  "key8": "4ooMcgZV72Dz1XkYstV7CRnhSCPf4rSmu9qk7xUXZviA1mFGXhErqejBuX4d543LRpSgbt6FJmPFseSUzrUEj61L",
  "key9": "3rPPQ2mnWvaB4LGGQj6tnQBFyy19zn5FDupdCjrWHxvtYKURqw5LpzsD7dkraPc2o4U3UrZisvNoAcmX96MgFrM4",
  "key10": "5pZmvVMxCeJ5sNYR42mmVaVaukosfzeP13sKZmz2Rk1WJXLTBCf218KpXoNG9N2JehcDC3GxcMEHA1u2kt1uduX1",
  "key11": "4GRZa3HnzatN9gd3ZYnLbSU8ubgGtPAzCUtd7QM15564t4ujmBbNjzmgJYjW9DzQ3FXzF5tCpDWbMW73tXBgMuk2",
  "key12": "3bGwCrrC7wSW98zcJn5oRnq3nK4peUGtaU5FBav5XTWgiNwJS8UeGsWcoEcLMwpBPUdgQcau9rY5rMrh6P4mjja8",
  "key13": "3KXukUA2esjkiAhyZ2kAjAc57wuStnah4eEry3PDpXUs6yMKh8QtAFb5ffpRwdsr4jS3ggyPAn78tanoHQpMCmcU",
  "key14": "3eQpTLY13c7CrCzQC7iadXrqs9CEHiu9XPLADT2F4A57ogwbb4yEFEKY7H8F7LYUipQDBgy95TDwswzzqe2jpD8h",
  "key15": "2irC8r5fvw2DB4ZjuaNeWzPGrCJTMwPDfoJWiV24oJu8mMr7YjaAQ6CFckRuuPMH4P3DcLRPhZyeNTCrd28dphDh",
  "key16": "3v3MsB6di8iao19wiQEDFaEnLAmqidD75McN5YEy4FYDhiFwpBameBP498G4TrqgEsSPt1j9ndtqTcZRenfwVL1V",
  "key17": "2yjTZbxvtCtTXavWAvycjmFxHAz7njgcFX59YB616vyDgHESvaMB8khbA2DMC1wspuRQXx3v7kjrLYgDt3UWNFRh",
  "key18": "4Y2aaecMBKTZDY8brdVHRPFkZCzK5hLVTqG3FHZ1urMzsV9HNU17kDHkyre5vXLG6sTg5EkqPX5Dyz2H7sKFSDG",
  "key19": "2MmkR7georm2gHSLpUYm5k41MKBKJMrxu71t3DkoDBw8Hnc4Pwv8NEzSirEsVMoxR7fc3UD2Zv39he3KTJc9GhqB",
  "key20": "2x17uJVMCScJAyjGAozcSu6YbMKkXsB4iPWUAuTFT5HPxEt6tC2sgFpHVoGf7Qab3vCHAL5rM49XAjEZnT7jhmTW",
  "key21": "oAhxsD19eea888mEX6WUxmRuzYQeYfE8mbCtCBdbHEvpQ5rPHXTEnFzuKMq3tbGQt4MbVZr7zir2VKe1FAzdnW9",
  "key22": "22tNdfKgcVyr6YJYdejfGdHzRdx6XGDw3fkw5VMMqeqHR7SSTwDdM8TvgscbEji2rPYyACNWmo5RM8vX4DafAe4M",
  "key23": "4Ds9idmf2Fk7Jc39etWLg6bhookmjCvdyrEroy4HuW1tQUvcNoKNerzhx8Mowcf2s1zXvDMNSLKXDU2L3KV85bX5",
  "key24": "2Rof5n1XJH7kaVwFXWuezaCNBNaBy1intBf52dq2TczUQocsztt55KiyPThw6GDComTmf38gxLCzcPzfSyPQQHPZ",
  "key25": "3goP269raTu5W3qqBy6TrxV2KsuCokzZCudYcbJeJe5A1cjyzYr4QyzYaM9GRjZhAmuSSVcaraFRNGtTFnvvfNwg",
  "key26": "31fmZc5KwQP4txaq6uq997zeQ4f7iTK1ZuLx6zm45cdrbUtpkzWAVitEDoHngN1am8YqtFDAiSZraWHfNyvkEmRY",
  "key27": "675fKHAw94gmhnaywn85EuJb3HZFwdprDhek1A55iBGQDtymQgJmmYCpxgRf6Lsmxkw5NB5dYatH2DNfPiY1E7FP",
  "key28": "4bFzEwSjSDCFg47MKrqx7hHVJVZDJjzRspV6QvkoGye6NgaK9zgQ2kJ7GswLcPkhyBNQg8mzeNAmwW963mVE6puc",
  "key29": "miAX1VvzhevP7Xa7umbeFR77K4oeEyfuUGBgLgfNDThxszu43D4jrf8i9juz7tpq8a3ZAbKEqT3GuvnihqT8q7M",
  "key30": "2Vzbz14LrLrcvVsenV1vizzwkN3AuAZzwpRUnEdhunYxEDFsjPzwXi61KapMUGAiEMkYkP3y6XD5vdJJ9hpAnUf3",
  "key31": "422bF5GX3fP2oSY8ofXt7ZzRKJPBTDTwr1SDdKkYV8htdFZSqrANRyDft1HYnb9h1nWqVemqEzwWUGEkDaGo76Rb",
  "key32": "2ojhL8fK6U67JNdgxq6uDX3T92x7ehrtTe4PyNccNQsyCDhkqVxMJFMNPQV4uYtaYUr4MFK4c3PYp5MJpD6eQQft",
  "key33": "271MeFDRYAdZhMNhXMdWK7ZwKmBNHvWWzL7rWBQkgLVwkZyk7FSLNPUN3yLSzty3YrjAuiaBReBnAcSqWG42oAV2",
  "key34": "2yuGaq8J2dDRPp49v4GLdwQupAivUwv5gxuqaWCKWXwDAoEHMqbN1L9T3txYxhNxW7RftWY7989TzNXMvMCt2w6q"
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
