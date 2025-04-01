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
    "86NfaXLcV5BPk4vPTFoqjPdoLt3j4t6gDUdHfXiPEYyXDCDSVBt85MLtVhodaicF2P497vN8XRpFSL1BCNuMfJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wkfxURrkxsLuAH3UXQth8DjFttMEHeLrfp9BSbLd2ieobLWb33uNS6RoZZNdKTUkxWki295bB2ToyHV6SfBg2M8",
  "key1": "4BCyLfD2iwaGFnFjab5bokCD3AH58h8vDuGxg5dhuj48yMQXPPMQLvx4DHKoCoKwv7PaATopQMQrPXFagCrazfaS",
  "key2": "2Yyj4bbQQizpS6skBU5cjb9TY75DLchXARWXx9TJXdwChSumtwV58Htrw7fKEZgHUAHWr6T9DZy9whBNQgEdwkNX",
  "key3": "52TaFCBRwcWonQZjkMUodVM5E2cwaDmY1yycUz8eCnLnZekSJebMksQDuMEomx9vzaXQfjkpU9zUgL9q4kXGBT8J",
  "key4": "4sfHjdKcdZrL7W4QW7nCsABUaYJd7LiTnYFwFhvHEZimbeJsqTFMuZ45RBh2CVQ244cKneYZQTuDFgRbFBtbDxSx",
  "key5": "56AcpV1hSs86FoDHZs1FtEnNkYVAURN9wBVPC49wMTcmXPRRhBrmdLyEFujAbYjSh8mxwB6VCrEthW5bNm9nz87C",
  "key6": "f6wkdoM9cy47gieqDR3AGQMU8rcV6z6YVkd2ya8Tf4Yr7qBmHbAiiuDd3bR92f5QAZ5Y5A5PzXuS95ZoSpazZ5m",
  "key7": "4XQgZHMcXqPGfyjAwvNmAiu2PqkbPECRhqoCpcLRy5HMTzKXiaMdXALrX3C2a5y472L3vmMW6X59dvqAz2g68KxB",
  "key8": "4Cb1M1CoE3PpGpcQPD26mQh9bXqr5CVWyMjzMg25JA2C5x2p7V4Mn8cm6AWHCDZEG4SP7X2gQUWsaKsBSSNgRxS5",
  "key9": "4d1yqQjj1j6V1qmZCb6TbEPynPfdeCLDLWrmcZqJbLsyPPFP7DAwXHyJHLu31Ka2u5C3GGoNtVLKruBv5kELsu2m",
  "key10": "5CjuioexjVMxU3vFD4mk3oWB2T7b4m4eNaByEjQeFiDHszfbMocmb4rKGGh1mLhZXWKb8mfrepQh41uu7dcRoVVk",
  "key11": "5bBngcbnsrohJwtquCVGHahUoCyMkthAEDNJzRk1udMxRBANxV2kKVFHTBkWUAkcNAtnjMesA4iPpPWKdC87Fedi",
  "key12": "26t4VF35NLhwsj1NpMKUFJ9ZSgDHZtor6Edp1uo2onNWG6izq2zV6AfRhaPDRtM6Wt7G5A93jLmf1nnQnCXgxmYW",
  "key13": "4tyPAS7H9HzxEpgNiByPsga3V7ETpXiTGyo3Q4YQ6h7iMebqgzakJx4QSxBFFuoZW17vug9ZfS8DpeZiwMR9tVkF",
  "key14": "3rnuL759MdtLYibfB3eCyVBawz8v7akJH5ff6MoLxf2LycqPBZ7St3skue44W9fm13oAYq3vNPSeFgCqZNnepvCC",
  "key15": "2SmUhepPcgoiSPPjsBPsZvgWumMfhbYE9oKgxFSZEszG9RTDAnsPkFaxSXJwn9iCutbAic8oe1mYDe5CJsFSPNVm",
  "key16": "3Ehjx12K1sx8UxikJ6dkct5zbHGj1XutTeGatt9h6YocTSLwPi2nxuQaLwXKuEyvDEzQVjWnEk8tBGV7PzjYf6Dy",
  "key17": "3NndNadz8KbM1Hw6tDzQsKsAeGyMqxKWgqwbBvLK3j2tZtwYSE5ULZ5fe4gS2SB2utTm2RsdHEFYjbd6veizXq4u",
  "key18": "KPiZsrBoiNBDnYtEYnTaKNsc1TZFJ24nUbBzJJ56WEd9AV9CcQxnBc5aLJiHXdQkAqULP9UeToxubYW9fRXpc3M",
  "key19": "x9qUJakZ8ojg5DKpzeeXGLuyCDRauUfZzz7BTDZuTtMWfCsrR6XDdMDbMhjeq6x1pvj91yuGZPbud7sHFNo8HcE",
  "key20": "59vShQPbhVeuScwZnsUCREhFVNZCEsHdQU1W3ue3EUz3nmk3xyTuE3uQ4qnnVZ1g3GzKqmKtEYYgpoiP38xkmcs3",
  "key21": "RqZZRZDRmrxYTDPVqsU7A1vMEGbvMxurwK7mPHJpTBvQFG11hg7ZKu1qQ4Qs7N9Wmg3SBmQiCRbHGv5gqwnYZuS",
  "key22": "3MzTczodWeijfds9idmyCPqJxuRf7woTSRmPsrASqQ9cGQRHRwGvcaLqsDXPXxcMqzn6PEHqXkS46bqbm7SezAbx",
  "key23": "4TsTMXLrnero7b8p71KSMjYfqwopQGZR3oq7Rc7rPTUFJ9TzMaV7cpAGdmgpcz76BAW5zDJ1jvtZqw3EFK7MGzjQ",
  "key24": "5HJY1nYyxbjRz6tsd7odKBQR3QuB7ZhBDcemptY9azSpQHqc5RwW4b4v79HtNs43NZ8HkcywNVux2zNsLj31Gw6V",
  "key25": "wH9CqXvgbwws259vxvanq4ZxpjpUF1ekEFG1yec4z76ARSfsNCdduffBeavZ3cbiUNk3QiVevMP5fTd34DwnrBT",
  "key26": "BY9Vrt7ptXXidUXdkCeWRXpkLzV6NwDi3wpv2UFSb64NqtpxKVVmZoLVJpbeLFApHYPv6KCmT54TiW4sWZfr1e7",
  "key27": "5PLv5QZZfTwo3swGP37inWfRMRki3WqsHp2PmHGGzdgf1JR9YfQQEqVVoJCPq5gutvNbZSo12aSFHmj6dvXZodvo",
  "key28": "5mt35kgC42F7SHKUqNjoyEQHpNEUSpeJq6GActeqSeuH4hA65VsEm9PM54TLDvmhupUAUnBxzn1XYRECsiqF76cV",
  "key29": "5yY6VtnKdm74kY1oUDV6LYWyQYDMqodtnp69g27VvHvo2AHuzMwSH7ipcmgWh48JWxmvS4EdgEJygLQEoUMY7Q6J",
  "key30": "36RM1dvNHTbM9FRAUTEKs1Ze1wzH2pxRzja1mYe4DW7MfxeTkzagQJEihSRioDJpxvYmnSXrM5guDxzZniqpEZcQ",
  "key31": "Ud5v2ftdbXWGeSRjXnyiSHz6ZXk8L9hJ1BpKLXTEpudqYrUrCG31WSAn6XoMMAe8BN7THjVnDSMJVbtJiCnxkKu",
  "key32": "3Zz2UZRBGtEoAxJ7Z2NdhZacbZnAULBj3w73SRS3FZv2pjV95bCoApFgxazsYtzcW8j1hVMAz9UUMcq4MjTBhQs5"
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
