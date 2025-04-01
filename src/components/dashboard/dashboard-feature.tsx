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
    "y1fLmaH4ubhCqk2ibuK5i8JWWR8SyZEnRKGcU49VWHyh4Lnn3bMV7ccnqPr3tZcjZg7EYVJf758hLBXriRDEfie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6P63EC5PVySWhRZAAq9Ch81R62W28nX3RH4wKusaCBwvgck66PYXXfYrsW62v61U3qkeMX1AGh3Pvqgdozc1zmM",
  "key1": "2YD1oXaYqwmSDL6sj1UfLfrW7m1H9xKr6Y1EZukUjVe3WRCmkPzsmCw73CL2PEY88NKwxzG6A47Q28MTfLE3pwvY",
  "key2": "52W5WvoSGjXiR9SzFHCVH91VV2eXY3KzPe8JfYsgSwS1D8Ndn8oAad1FP3mC2ehVoHadedwKe7rerAY25d43kqdC",
  "key3": "33gbxYMvHe64BhKPiikd4fHZEKKRpAPdfqAdHsj8taXoU4Me6aeNqZbvrPkArxC93L3ieW9gRbxJhKc42C69G2na",
  "key4": "3hhAdZBxi2hk2P4N3P25jCPNKvR359wY9SGcAhW8mTsH8v9dFuZFzfxEaRRTEqSt14i11qDZrtAYiqPVyHN9qTNZ",
  "key5": "3XLayqRcmtkVqXB8WUgwNyKxTgPkkAjh3jcgbz6MZHEQoTsT2caoq2LhbcKdHTf6qEeS7eZbPbbPDK8u7NWS6847",
  "key6": "2prVTW2W8LqJaULkbSVG1N6ZqjcwakZf4mpMj56Yi1cyX3fMXC6cLaFD2ryof1qa4w3iq3eV61drKWjRzGCGGdy3",
  "key7": "4QiLCvbLoTz7cKuCwmxaTcbud7oK5KSTXyfLu7LWK8vgPuxwX5LwatfdoBZWRBzNBchXxSV7WtYRTSpzKc1JcBL3",
  "key8": "2iT4yLT3hyyE3uEFcaqgAEhzaQKYgoxJtDPV9LBvr1Rp4WuZdfQGyZSP82sKYSSHW36FtENyVCpAcSkSrepPppXR",
  "key9": "kznXdEUDb2qCNeSv1W8EAfY157XVcmNvtbjiBgRxyxWqYxqYBh2bAHPa3cobUgATN1mCiZkvitqbwgmd4o6szH7",
  "key10": "3cymbjxjLcByjEmn7wq32V6FRjgHd48A3n65ovtcbdq2vizm38rMAZnWtoUTVMLEJynHPBcf3iX2vF2mtmsdxa6g",
  "key11": "5QJSnQFczzt3PDHiVnZh1kAVMmMLkNn9mZshwVJv7jz9UDNYmRYnC9gt9b9Eg8XVWMFqK82EskpauMf81CkKGWdU",
  "key12": "4CuxTzhKhkqhhxsqj6YoJnWEyYVC3BRLCKsZxfkcrMh91XSdrpYPnMt6ohxh5kRifkq4HXmikvhjmxPUYiQvxTtq",
  "key13": "2scFknQasMTbm1AdqTBSnfav3NMxMnZePW8gU2dqviSgRDEAXPMPdgskHQ6dmPGFCC6JjqwrmkavFoQiqZq33w41",
  "key14": "3R21X3H5vpMbu3NtzATautQfQ35wtVxU9kSMZpLh4RXMQdrpS645VW3TNew9w1erYiF2D1oRH7ow6ZGZ5PDqWnpH",
  "key15": "5R3asAWgfAoYktvZdMZiAk4ynSvNmkuXAJijCKxexVLxhvM4QLCxdNiLdkL5mDr91KdHqSqPetBiZZCsMUpcaxTd",
  "key16": "2Zb4QCqpCVwprFVCCRePEVYoJVWwtvhfuts3Co4b9Up6j9gbZJQuwKqRguvhZp27wmjdiMW3aCTR3SFp9bzTUaCm",
  "key17": "2b1LSYJuKSLyCoB9htAWs1jb5HaxcDttx1EbZfjaUuLASjYDvxui3m749GmF5Jz7igcaYyoFkigqerPQu4rNaC4h",
  "key18": "65dgzawf6tXY29iaPTAfMNrcNXJWiC4cWYq9zqFUFsmMhS8nVGj8AaxMAo58ZWEydaQS4KNJ6eVJwAzVcdVMPBsM",
  "key19": "4oixvompzC4aq2n3mHub2n2taxB3Zpx7jtbDtjbtMcB2sF9ni1RbGL6vmTESQjkeZzamLyUh3AfTGfpYmWftimBG",
  "key20": "4ZDWtAJioRBQ2hGgQ6Pjefoa5XseBm53aLdqP1ZAMuVW3gU7Wqdeu7DWjJ97dULTx2oNto3o3oB4cV57xZ2s2D6p",
  "key21": "4aCtW8d1eg8M2R9A2Bkv9LZbphJhshdFpcL3egUAffDtiRkYaexsmHgcFrfeZgzVy9PwXpziDuop6V2odmQRz2bW",
  "key22": "2vzZrntnDBh3zrASXyviVNXZ4CWbns4JMrivkiMkuSUoicB1P3tjPpDsjb7dqm3uMGnKGh7RmY7bfRRjk5wgxgs2",
  "key23": "4ubQjZ7ZFD4P2UchyKqKqU1CYfhD5aY22kP1WsTUy2NbWpc78LDvq1bdXYXV3e8krQ19yQZJ8f8zZfSXn7NNw1Eq",
  "key24": "4u6dRpAYqGCcUnbGPeN5X6E7ujVt8ANRPRLAeQh7DwWFwMMkuACB9wNnwsx9wKio1fKLDDHkahLEcEPjz1S2k5qv",
  "key25": "376EcFYnV4tMMrSN8MvsA439jSp38iQHL3pSmzkfXm2Kwh4RiDPthY28Rr6KBGMW5qeFJLUBapvhXk4BwibRwsCA",
  "key26": "65kZ3pG8iEJTVyMWf6eGG1XUqHa9bswVnaZsbYzGZYjQLnfmwh38MxDT6cGnCg972gApspdq6b6YvJA4Jk8Wg4jW",
  "key27": "5bKLyLhuyr2B1qJHjyQLuRRy5FxCeJpvGny8nnzhN3qXtxMZ4ePGrYPNbZ2dW7iUZZuRePE8FnvukcaiSn3rJpo9",
  "key28": "5th5KtuwWeSBm4d5CgHxqPuA5i2nGYgWBQPgmAPyqaYWm7zzh475mi9t8DvofGefaP8XSmQeekNwUvuuuq46H7bd",
  "key29": "2Amu6EdQoahjbDiCuSWn6wArAuMTf9JmJJs7adThC1MD7raL6if6Y7MpxdSzdkczZYjEjazipjSn9Fiy232DTEV7",
  "key30": "2BRy7tCLoKiwwA8rLYKtwS7hGBpeUhoxDyjNqxMLfGfscMFgYc5G8A3cnQLxbDRHHh1JkB4Un3L16SjrUxGW3chV",
  "key31": "5YdBGz5PRhRvK1uLJYtKtFJgkX68suzok1ffezkA5hpaJxUoHmyxAvEVakmshYPSwm51exiijB5TLchQEHUJDvSD",
  "key32": "2ox2jqYLbkncfaNnc2odkcLWEfYqZYNEFarkiuft6KDSxu2N5isNi1vf9CyPjpGonFTpK9Yd1b92S6RqreNHPQyy",
  "key33": "5Zo2y4VPAdvbspyJqhF418GPHhi9TeW9m1ug9GRJnpZKpxjzciw89UBRiNfuT25cbfGMs2U89T9dPrpQNuvb8Waz",
  "key34": "3ncUbGzN1iK5nEdm9GsEHdqTnKj6xQjprvQtKjZhHitrFkifWogsKrKPx9GLnxQyYDPHNVbzcqU3uofkxqaAQ6J1",
  "key35": "5cuEicoybocPzwSZX7ubYL9g1VpmV7EtM5V11TdAf8kERcqMX4fy15kJjLVXKStNDcmecFmCw3NvQoswSKRKVFi4",
  "key36": "5ULXCXMHYFxgXU7W6PZJWCc8AWdJRvGdPWo4m7o6ozyhodT2P8tRf6cSvxp9UTjSmcZD9129BkLLcSCDDDywnuDJ",
  "key37": "5k7ihAEfFjpzjmABDkmJpnoBHmATT4v4cbEpXJrgPuSwYdGGPRLUkomRDbigwG7AnDRcKcHYu9CEPNkhg6Bbp49X",
  "key38": "3SVKy7zyQquyMGKJauG6P7wKY3pNYYNQ1N6BQp4QMEKzJKuQEdEoXgqYzaXWXhSfLtzYpTbLYySkvrrv1MYrnPCX",
  "key39": "29N6P1oXB48UfsjjBV1zmhHZwQJDm55MApyRTt9MP3zaeJzUWmc8fnCTiNQ37LAvLKBUrT6NqvugXB7NiuuQyxZG",
  "key40": "5NtFJDQnJz9dqfvcpwMFQqCm53rQQRJzShaRwjL56Ld9VRwej7dKDMFfeA62yCic4oBSjfi65i5uR2m3tUg2GSvG",
  "key41": "65dWNsgMMcGGtP1QWoGVRJSizTYyFRKmi3CzzmAzLn8G7nH3HZnimstqWN3KauB1wGeWUaThSwg4etH34QU5qk3J",
  "key42": "5nvS8jv7fLgZ6ukK9iWHPQ66m4B47VkKTSgV3rZqiAvNm5vSFtaZWUdFUh97ZoXJVpmEiTARZUpNHASa1Du8X2GF",
  "key43": "5BKUXgRqyycq9FcaLTqND3YC6wJXfPw6zkXhpB5Lg5Dyx8v41Pn5x3Pu4Kcbp6m5bGPYcmmXka5NXtm6a9RW2U8h"
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
