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
    "2rp6NUSbCMF6JwuJ6Z2Gd9MiPBXJ7UeS8TU6Lx8n4dxsyGuA6FgFcCu35sDubHV5o167kKxiBbTJr4V2G5vBPEDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CLqy2nDXkspS3JJrzsWu6ivvM9TnSuxxKwvT2v1xk1kN7yLgZbGWku9hZVgvdis2vH2PVx4r1521jy2XPk92MFg",
  "key1": "J47vcfhewAjhCHYnaHGKuuw2cLSTAeR9bPtdASEm8mLvAh7aJhUMovh38BY9aqRZCadiTx1R8y2Ron6eayqEddb",
  "key2": "5EFN2HHg7gj3e6Aexpb6LyLZSx7CRc7M3oCABNUVRC5AqjRzmkPVidkspH4Rsi5SxRjnK1f4LUc2PQjGsYDqfCBg",
  "key3": "a5gQoNhfhogHh3TKbg6tCaBcETmU2468LNqieWAeSqKjtNGJaFv6gWRGdumNavLgJqAirzHSu9HwaZ7BaFNAcEF",
  "key4": "3xak1qSTkzjVQmoURMkbVb4bRF1gS8L1SGYkm7cUHGTmuwbCQ5bpyNRcpWYExh7qicAjU5qSFLVdnxGXvNm1k4Z7",
  "key5": "5XiwnMtW7JBUwc29U15BFBEicqzYqDCVbuHJj9JqKXR9SaNMTcwLoG7qVE5MRyXxpwQHiwX5RoGYtM56gurkQrQc",
  "key6": "5vtuLFUGALqbyP4UVFVA8sBtQFFXTHoWdfUgJpPUxEzZAvfv24rbMo6YSFWwmnYenau9SwdmghyFpNQF53ZUiRJU",
  "key7": "35rmkgSsc2JdAcJxi8SA2XDTDNNviDeeoUX7K6wok8G9vMLHDNSPuBVWsXdY9Wc18eX1haBJp5Do5gTDLsWB9mb8",
  "key8": "2JyY6mSdGvQ2sXHn43pF9xVxFfNBGQJahsyV1rjpLUqeXq1W1wKH2cu7Xa6c8PhqdT9oMW2PC9ZiKGDsHyX3Hhzf",
  "key9": "9znez45ki1WPQx69u6eyqKdsotB6De9qwoFvcC9kDoRhMtA99KqQYT1ZrWfWHbcS4pm7Ld5TfPF6j1mqm5y3iqA",
  "key10": "ZssqvQz6NxXepbfgaBdykRRSDhFdk7hCMzmXuRxtJ5ctsnnPsNGYJqnX3CrDZvC4rLdG6exmZihRgTsVVsoKkmn",
  "key11": "4mAbitCpHSgXxm3cuoMaUzxoaEmBzfQivNjgcDMD5fMeWR8xGzMUSD2buYCdmz32PxtHQRoiVSM8Ccu2Uk6nfUYe",
  "key12": "46GwWT8kP2AwNFHT8GoWa3qvBa4DoARKQ5GcjVtsZ6MvrVdsgxGwziFvzhpND98AdCCsFJ8t7YWpKV8V8Muoue6d",
  "key13": "416UAGCrRbbed5S5nneQmLn4CGHkNSvHQWHruYDTvSr31bjDJiXP12LAFdxRMNb2uKNyNaC5vPn87YAzeUpguVa6",
  "key14": "5EnBwErKRH1RjzoFgrKAay5oiCa1dHfVQSGc6WZrCXYgJ8AidtWTk11nKDbaBRTPe8BBwvnDZ6nQCp1v16jNPt1Q",
  "key15": "3sjvcDvKNeu1UdzvyaxFxchrZDKJigmWWr2inuRcY9Dav16doc2zV5vWtnzUNT9dXSGkwRSBmDba9MGEky4qKjPi",
  "key16": "3SdChyoCoXo2Weu5nmntuXqjFtZizPsxgSnQtAp74VfPvcNriZq4yzSEwQpHS74SFy5czaiy7uUWETJx6uFtt5jj",
  "key17": "2QhvWy8z76NocnY1xvwfKMVpQca9tmDAh26TMYBLvDqk7hFWM16hNo6PKAebxYxLSrzMoe4kH58GcpunB6KBgJFs",
  "key18": "4WCKAvQgP93hsbTajiMbTyW7vdxRykYp91f1uZzJuLQCkwCLxaJBavYaX8cQWsPTikoQMA9fy9qN2mMiiKNzDGbj",
  "key19": "3J2QxTK5cr8ppnwYTvNtihucMSYsZi8Fwiws3DjPQr21xNujQFfxL13WByUiy1gnC2WK9jupWKs4uvs4sDeRBbkH",
  "key20": "5MVfuvNnBybjZKEcLXnaJ1StGbVAJv4myNMXvZogkqnhYsdHm74WiJJyG8HyWus1FhmSAL8Kg4LbWGVjJG3qmwM",
  "key21": "28ekwHTeXKndvszHEiMkzk4VoLrFKqMnYt8kh93cPceE4bbV6ujF6j2BhpsCf8yJYsS68YJutv4ASSe9vNq685s2",
  "key22": "2iA2Ur7zbxF8EZuSegG7FsBqHBW5NdZ8evHxnmJNavhGePq4tuJeaLi6SnHGBiJKzNzmsy9egZHN7hdsaykY1HQr",
  "key23": "4LGjUcUAmFqprXhL7V5SvGx3zqj1khZux4G5FiwR21qaLqeR5xnttU6FtBaWFkKaa41wduaKApMFxV8w6U9cLhtQ",
  "key24": "5vZCH5dMM1kW3rTQ5sr8wKwabiAL5o57JSa5DJSo3TPYFG2nuHD68u6ny8wchCbkH9fpfP7GkcGLNgjkKHJM2StY",
  "key25": "51SvZ8DqTHqkqcd8HtnyhSzTuYDi1Ge2fheci5aTi3RP8seMfwCwijZUHHioy6xwy4nTUXYnhMWwPvi9ds4MJLVG",
  "key26": "2GXTxvqtsRawinX9FdQ74eu9oi9N7Xd6r6ayTsPxXot3SSMRBCZKmfAzjegr1i7zd7Br59GwV42PGdXGb2wmGygv",
  "key27": "5i4LY3KFF1zi4uGUTRgagj84E3FxM7TSL73d1Pi5k97DJpqi253hJtqooSAg7p1b7ZGTRWDAdzp4r3oRMrdXwUw1",
  "key28": "w8FnwEDRJsEY2faGhku4FRcin2dSS7jw31ix6Wmv3e5oi76P1f6TFSip8gntRuHZ7XD9XMy9goJW7r5RkYXF1rp",
  "key29": "31iAV753vfRnEdBPxovDRHQcWZu3uuFbi315gLN6dg8XwwLEGGaEaXgGYzMKb4UwkubK5TH18j4n9TnLYfpx6Jv8",
  "key30": "3woxzHaTedRq92k9UrRRreiNeHVPq1V6u8Yb3yZjfmwncEbsqpqsPPW3Pddj5imaQaqcr1Hm7DXuimtpS5YCGK6j",
  "key31": "dFTC8ERJxyce83sEcD2PxAk7NS13mA9Wsq4R4wojNH7nAhUsVPLocnfGp2M4TixsX51vLCyfLMvWQMxeoUnqBhw",
  "key32": "5L93K8EHaK4PdCNzEsh5gXi7tucfr2gdfvhuVuR8zpRkrcAAZCrStfrXkb8BiuK6aVromKGQPLpnJKjD9E3Eahsh"
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
