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
    "4NVRC4HGEH43d6ANZDivUhykS1vcHS8FHA9hfuky6nXwTxmTeyonie1w67cycdT92j2ExQSQysGrHFFjRs4niXbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2es1wpVJUURehjitMKCiJ1Mv1D2LP8VhAUDX183bRqY98f6YDBhSG6i8B3a5yj18y9zmSFLuzqknmC1616fMR9SW",
  "key1": "4S4jWgqgSNwxRh7JDti9KzKpfBbfAjY89pA8aQPms6it7rWXxDEZCYrMyuqEmKmUicyPz5rpJAMGHtLdQzLKfypz",
  "key2": "51hfJqdBkMrRxjY5qstiNJNQG9Zh5ge2j6yap9kpeVPbNGKs4LBVvMgrqJWyCd9QVXEnp7tc9dMNUNiN3G2BeSFv",
  "key3": "21yKkwegJcR23XfMVs4JHFvsYZ9A6ScZAw7Xuxo3K3kAtiUzAqyLJH37HUPHQ4kvnWdLfesWcz6Jddebfik4zreL",
  "key4": "5F66Y3dEbRE8XWpQSmPx2H4onFtsATmW3dNRCyk2nLgM2EQBBmkhimJZcYcCLVhRwDndLkB6hEiPPquyW8NfRfZu",
  "key5": "4TtcXaZYVvkH6zEoHNBmrNC9edsJ91SU2YokzFs9KaEroueykMHRzJEhJwEXxacngnsJbLRkwtyKFAmRRFoRtrMh",
  "key6": "5rV89mrXnGY9H9WXfoexVGKZazVpgphs23Wr1GoXGnLceqqSuRNepMrehNykBVX5Fnn3xRNvBF3JkgK4Dejv3Y3Y",
  "key7": "2HvpKqcTFx5V6QQiPCC93nktdqXXMHgFLkK6TyNSV5kRgwM4jcusaZxA5mDZqCWZNBWZtwtE3xTat8JME9reWLSb",
  "key8": "41vM15u1CK6QKHCrb1SBPZtZ7mNnmjqBdr3agiG3WGmPwCxR26F9zSbZp4FLwev46QA4LCfggoCcDxFzuuxYhb9y",
  "key9": "3GzuXvXXty1Gp1VohVKVKExPfJkj8TxNuJMdFYcyk559ZcQ7YighFCcqZnMpFS28QCSTvQoa639fVpTem2Lihfyc",
  "key10": "4nuuF4JqbHymsSvFZqxKQAmmyb4tvKUg95dzwAz4HWd5oF2LPXqLrCzY57dGSRYQVtEUkqouki2JqBeSGmAAMX5r",
  "key11": "22ECoFjLBkfZu5CQrQukF5uJTkREhrEWwMWh9DDSD4xPHKffh52F35Lr6T6yqpjtiJFPui5xxRSrLaUgnugyzUQT",
  "key12": "5oas37gt3tTq4r9AfVJheYmpsCsSe5DwAEZNCfFoR9GKw2wAnyiQ5kecDxToafZuNoN8yUZMmkDPrshYVcAzSCq4",
  "key13": "4AAFhtZGG5Q1d8gcTz1NsvfBfP2FkdeT6RWhJtuhUhyUdvxo8PeBTfG58PbYqpJ5g2T1RKM47wkyjmTEx5adNSuM",
  "key14": "5RJY1i6opsTE3kwEEWS2kJK7tdfMRBwueDErDCeWYXMbNzA7ixs4qozzJNqEB6ya2AenyAWRsiQUNKWMRFpxauuh",
  "key15": "2iWDZgVSqGKRUydMVCt4ywW2FUn21uASPmgw9KzebHuGuRpFnE4So1WjjeaNGsUqhtmGmiW26DKfnaDQKqwZYXop",
  "key16": "3CtqbKsNgonvFsUCkWbaxUoL5UxG9xof1yGsgnGYeMYkCZPFCrtGPvMGkB35LfbvD9egZbfohBQJByTjE6XQaoFM",
  "key17": "3oLAuwhgasJKotZoCJH6GhKiuVtKNiYCy5Y2KRYzGALxawLYwcfBRXHgTmqjwFK3FMBVU9VjEpCfaDAu5YsiBAD4",
  "key18": "3LHSJL9bWAy3YedNQx1oQftUEse53UvtJe7DPJoBBaAgMf3XHeLjnz4z9csXf2F4Uupg4vwxoPFyaySRXWBqPPFp",
  "key19": "3HbRfshbDpTYCumoEMq5T1WkYruXj9XVbXYEFEH2JAEyf75FkdgoLhmLWb4dTwrzBn4if8hQKMPKUjq6HmfgAVr2",
  "key20": "4TrzKRVf5Wuf5ckaXgtHu8La3WkiU1Vrgx7s9nFFi2XUEzpo5fu6q6iU5jwgvP5pQBrVds4aajsKmgDF4gRMwJS9",
  "key21": "3rUSMKZNVA3enxMMTsQC48BJFKSszfQJLPRRkQfrUgnUpNZuekDGPePs1ykMUJsVSHtAu29UxkpEQ2B3x3tePMnS",
  "key22": "3p6MDCkqK33Zb6mfxCxxe8gVpyEDgnxEM8yfThPYbiCyc5r3uzsMvPmq12g7DfPXYTrEhbenhSpsMJPowH3EaLSe",
  "key23": "3nnFLzzwJhXfwMFWZo2zYZgqgP35N5HSKBHEwsWm6uwUqE7f8FfmWM7zxmxUTMAx3EPgiYrXfA3G5nqnXYuSNBZw",
  "key24": "QUGHqMJkw5NfniJgYvk3wKBcmiHWFoTyYra6GYgrPPU1FTPumY76sgYiwu5g42FQqeNa3XQ692e4yZ8FsWdFjAP",
  "key25": "5kWjAU64fbN3vvKDepPoeUhFBXGE1tc85tscBdhH82D5ZfuoAj1Win3k1Jnj24vz6mTxC2VNUn3aUSB5TB1VwerX",
  "key26": "5sFbSALwaJYtfmr6WPhyLfNVQmN1DBuSMudLhYJEVQR1eMxvwUUFcT5rEt5JWaeKox75Q4S849um4YybR7tLmkQ1"
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
