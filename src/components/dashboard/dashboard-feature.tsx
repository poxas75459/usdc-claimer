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
    "QNhai3Gt1g8CRgpvDSJK2z7vBCM9pGC9MesAVaeyy1uGbFXgEgSgmLThtjg83dt1kVLf3UGHpYnFdLpX59zAzb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pNi2MMcK66nPeUWxYz7UJeZdY3baNdzB1yx4y26iFDiU6aJXcm1bykTYn88D9kAkZCdghdodtDvHSJwCHW7LSba",
  "key1": "3P2aoSLZjfiE9bL3QC3fAHga65ZSgGgoDuv9ydp2x9id3F5WGrUjYB2JWrSaeX7xgsE8cMoma9ppUV12J8adgA44",
  "key2": "3UykjWLXKLGBY2m9GXWLCui22znvrK9kuJFD9NyvbT6vSWndFu1ojaFb6dkXDb4y2rHR72UHdC31NpWxrzyEiNLF",
  "key3": "4MitUFhQ73f3bJMRm5YNzpCPjhCLDXMYAxj32iFnjJ3j7vEzxf46Nt3ydarkRYpe8DJUjkan3JLU3h8zkYVarogf",
  "key4": "5VsVRZSMym5ewDhhJfkFHpHYj8A5MWL3ZC5Z1CE814pwsRsNyDKFe3dA1QZMYcmYRre9AqEavTcwN3BDcHcRXGKa",
  "key5": "8kfsWoy7gLoa5n1SdBRXpuhi8en9x5zAUZ8tC3LVqnkWxHvhep28U7Qm6to8sCpr5qHhUxaeBFm2KpxEShM6bcF",
  "key6": "2RDnyLcbudYqZEwnkcJY6mADcSioPDvhWwMAqUak2ebrCbd1sgxSV5jNhdT3DqNoV5UScSorofST1tf6u4Km7HFz",
  "key7": "4k9QoMZwvdHshpF7VqhpvoiS1cNWSbEeNCQJDkAtSoFQyjJdTiENsG73Ctq35KkE8ozrgfFeGu8xMwrqvxr56JTP",
  "key8": "mv7mnAPwUQXZtphbysaCEZTLfmpNWM6YW1Wr1B76x3PnUCKtpZCQg557eToqJJmp2wmBQgbFBtW4YCw8x2xrFAP",
  "key9": "3v7mUkyaUcr1o7E5GmxNzXYUWdhUNCCsZ2RuAa11uD9ucMq2n3gMmEDqn26GMG9Ac3xFQhLErDXiq3jJGAWGEmp9",
  "key10": "2AaUYvbYyLjWfeuVMJxKwu39RXbUy1NHqbaurmeX9Sk3Y7vFQJDJ9UjULBvFWz6rnQv5UKDpCTyYrgG2TyXy4DCt",
  "key11": "K3ypAx7WFM7SNk7ZnPqwh5oFGErFZJDns7WMZBKwMuftLpYVFMa4w1VbLhnvtDANfV7L6J7fspLJBKHd1XZtjdB",
  "key12": "3WqgvWXSvMxdTPRSJTVMCsonshvK2xbYuTLXHt6k9PeTU2wbVGAs92NKpNszmKVnqqKm783cCDbtopBhCyrram65",
  "key13": "2MC3s8z6RvoFFV4CtZkTP9tjJ7aBfh12aEXteUT3Am1DDNqn4zuFJu5Fayqfvxo6PvDVYC7uV6Y8fkyj3dyzsN6n",
  "key14": "5QRcAn8NzEBSy3wqVtNoZnYCpZtq4GmQ4uj4PoM7uinZVFDSqkJUv3jzewYLU6UBFJYrjx8ykZDVVq7wBs8FpKAB",
  "key15": "5UN76sfEFYjKrf3yEAq69SbkCCeCN9H5wEieqxVQa54J13n77aKuPV7MEb46X1ebb82rCNUQ8xAxeQxKGnbjj8fH",
  "key16": "2FVQfEG3cdncXnd3m4uAxi63dfL4nqZMK6mRekFxyhunKNqZ7M6Pfn71H7vqQ3TSBYp7C5sEq4e1DxPDkx847boA",
  "key17": "4PYBpWJ2889qDWdeVWuYvyVzdG27YYmaRobRfFnBjTumtyLRq5BeG9movpTnaKeoSrvpQtm8PR1QDSEvo7tMiHcT",
  "key18": "4fQW69JyYSS9MyxEoujo7HYAqggZwLmyaXWundgtjLCwqmSeb5mcd1EUKp5GVJcq96KYEwsnbwySLG1fRqMGMo3Z",
  "key19": "2UTagLtemj2xAA9CMSyR2sem8V2TGPVNgfFwfVuL9MKd2QWS3ERMjLyDycNaUCiEvmgKMQwfwUmrwprTB3sAgV3K",
  "key20": "h4pt3ohPfaW6rkJkYiS8Ez6sTAiNRgteUf5eLLWTUQUMuSvXVLRtTXaEvGEyPgzxdww8RHZPbM2vgrqiFeKfUaK",
  "key21": "2KxMP5ayQU1i1ZR9brak6wE9cCoNfX1cKzCtiVC1pkxwpnwoqmmDLFT6mcV3N2w1pkZbx4doBtgLqVY3pLkxnZ3R",
  "key22": "3Akztf25V4ZzgAEe1987RhB7UdkMcDoodWrp8AD8Vcof8uJmfkZFsFSKiQgCrNpxDFHysVdPFmLovDpLFmVv4ipH",
  "key23": "3YUe13NvoXpB3kmJNsw8jPWRr8ga79VBAi14HxQBN2jNtVWJRmg7FFn44hpquTMiHrXKmSx1gtjDT7bxKjrG3XB8",
  "key24": "s2CK2qHfz2b5Ci7HjKAHJBJcRmf1iLZd2u8RhyrZBXWQQYbxRXUG5MqE54yV8zoPqE8DDzSUSJ1vcewubHxDSNf",
  "key25": "5vQMhdtKT76tJH3qav2oniUsXwfAkHb62zbSh9EkGbaiHKo47xWWYQpQfBCCLgJ14nXQJbhoysnATyL1Zcxk9BAu",
  "key26": "3XHBpX4eqVXorJHzVRDJQbtFbhu88Vfzz1dpbP9w8dpkhZKS2h4cpkgjoGrkudo9YNtr2Y6voTeeyWWeM2j4bGMu",
  "key27": "5y5g7nkufM2ckP8M6L4KvBpzNoKhph3JEbyHHRC5VVXrpvEAiEMhWe1qe1QAPwMAcvUAC85E1abnERes2D7wUWDo",
  "key28": "3GAA2EF3BQx3Po6iUs1PN3W4kEfizK8BNtCj592RwUwbaE2nhfjtu9vCtAVUp3kWin4EPW8sMNtmThPNH8zdgrQX",
  "key29": "2hYzA1qKYSy4xX8caCMGWEAgNbjeSnYHjYv66doiNzEmXzo4gJJLT9JPXHWtWdFj8vV8s9nCuAG4Dt2un4HNZZJ3",
  "key30": "EuhBWpnowq4DcgQbvoNtmTw9qCR8KMD8d43w6GEzGNT6DoJaYejiRnXjxrhW3nu57MTxctJR1EPfhGFDqbzwt4g",
  "key31": "ymcFrP5xzGHWpPhGTrd4qBygkXg8G21hMkvXrHe5jKnCut3iLeX8MiMLPwKHbq7gviacGxAKfJvemF73Q9uiFSk"
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
