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
    "31w3Pr9g52Par6Fig3GqxNyh2aHz22aheJ5rK2wmxL2R3c3C5dy42yhrrBwqWyx1WoHPrH3vNPhxCVDzXghbiGSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cisJjpSGVA3eeEVFYhGCAaYY6g8J1dze4urmAE4hUV1hXLkxquVb9qEUKAxMVwVcsH3z9n2ch2aPS16KeHxyGhV",
  "key1": "4dzJuepWXEzNFQ6gWKsYbg1xhFme5kknacDrc9yx2uws2vXtatbhNFsbZ7VdR4nZugDd1YCejfMSUWy8J2hchDdF",
  "key2": "5afgrEWwnD377hm9rGdHnF9k58NbM2dCD3ftP5mJFrQmQJMZ3nWj9bmE93ZkHSP1wJ7wQDEN7WWc7x1hD1H1x5hd",
  "key3": "3k1SmDKKP6nTFQRozb94pbkey81vCQD5eMTo8nsi9iHDcMzfQdX8oX1HuphezkPbZ5B2K3w7UCtvaBuo7gV1pEZR",
  "key4": "4vKaa1jYPTuvYryad8rMmpJstJSp5HmceaaTGztnFimpgnibKbykPg3ZZudWyEaKyT1bYbU6sVk92hCHifss3ZYi",
  "key5": "2zGF97egGRtYaFM6v5rSi1s26sAPaNRRnMJ4Y67o3xw8LyAShmQe7MLUkqrm9yJDSc9R2cCXdcud7gNg5mTEquQG",
  "key6": "4ybTjku4Pn47n3iLmSsnwqZAne4oCLmqPWju3VqjZ2bice7C2wAizJDVUWXVwK2DD5BU4d5gdkur4VbjpqXbDPS3",
  "key7": "2VfjgfxHbx9gmSRZWwFCzFmuQN1FhnYiBfoXSJmQhZyAeBpPk3bMEQpiBap3vkunGmistAHLuxQ1FR5MAR3Ks4R9",
  "key8": "599feEfe2oA5FatweuTf21cjVrQNCmCB84h4SWgaMHw6sdNtVTVrYDePep4tCDmfuqmQ4j6H3nSUtLSFHWpfvSzB",
  "key9": "pRXg8hx1FoN1zHG8CDc8uS3ePDZewwQi9H82JUg4p33Gi7ieQ3gny1nLTpkKoU3ZgLYvhnMAnmeEn5deykRLj8q",
  "key10": "4s6W8n2rBAA7F9TU93NgdG7g9qScDW2zBS7w4upv1etCEN4TeC8Z8Yb3vdkAW5QPxdWviTaU577mKVLmdnua2BCx",
  "key11": "2LyBHYiTUhLobT38b5PbanNqqGf2AcyUmNctRz5PPr8sNW3zd2HLJa6a7WXbCVro5kxfcGAS3Nw6Rp2FYb91ppKK",
  "key12": "4UGWS1ZX5LsneR5vyqf96UHjsRtKaurDeHCCa9fRk3hnfFohfwq249u5cYTXSDB8QwX72LE9NmnMDb9WsHycmtiv",
  "key13": "4EqqzspyJDFfT4jpw3TiLB6mSmmSHGrviGPWBtzz4hDfRkVYTYjYHY18BeBKMDUehY1no5FXjibD3CMvBt39fxQE",
  "key14": "5hiEAyahiaiXMkF6Rdd623kpLiSWiEAB6QtPVWHepAQ1ZwhQrufkCd93k5qbSdj2cw7kz47Drk2pD29TYJMhDr2n",
  "key15": "98GMn4d4S8SWUyvoxqoVhWQATd2D9QbqHC6mL2L5bcqBTcfRUgc243GFqLND6UEnbGaezJ3qqLESuiVnYEpHz17",
  "key16": "3Ja1Z7NebvGavgLgcTVeDiey74ruubt8mFAxJVSVBBKXeo7h7wNT2DyJiQfTuKp7zAwxmGuLTUXF3Em3AeHiT2k",
  "key17": "49j4Sa58nQsytHgQxK72eTFbKUn1nup2Pt2REaEXc5rvZe9viyPmwupCATEhkNQ9L8vj9XG7MExyjnFDtWh3mjr9",
  "key18": "3vzqV7CzDnQyG3W8iixG3zkzA2umDwt41y33juakDaFPERbaios3nGv6kt4VGZYERUn7JVX3MxzzRoPpz9Hpgkc2",
  "key19": "5fA27Df7JYkb6QawoLnwFsWkNny1EWN7EYVK1KkEXePAfj2X1EYJ8udpzwHnBNA5p64vFijthW7h9Kbudguuc3jb",
  "key20": "3Kn6RZfDF3a4xXCmxFFiwhh6Dpxptr8FjRZzouQ68U4J14A3nRJ8dm63tMWohM9W5xSLtAKXKMoTVTzmsHtPXH9M",
  "key21": "4NkMFXYn1FJC79JAdacEZUjsCmr9HiP43W61kKkJKtPivKXgkEA1kLkAZyjguwTAoMVcFeEDmEop3cN7cN1Yw9GJ",
  "key22": "33x6qU4swinZ3mP3jn6H5KkBfwpTBY2PhfmradxeqpbB579TWpaGysMsocoQaJ7KqT5fqkZQkHhFSvbnEGykNTA9",
  "key23": "CpLxgc2EybMqVVuxMJC9C9TwM5F57GBSMoqxc8tQsEL3uGytYoMSvAqr6VxwXWdGEGoQnBnKWYwjCwiDNJyJnQJ",
  "key24": "4kv35LLjx9hQ2kBAfWsJKLDram9Psv7or8T9JbyfxcajsxuVGWLD1tgugrV8U9KzhU4DCKREnrKstAGSPe33wBBG",
  "key25": "5hf5iveWNRnkAJS5EzZKsoi24hkbYd3bVTrMy7CAVdhPwtnn66QmwzjmSF6YhGB9AfpiLP6fgmjY65YG2WYPW3Cb",
  "key26": "5kDzfF6YWEqS9BGo5vX2tEuCSzdDzQycocK4HxUPKU5fu3kYnNADRGggQHsbdCy3Pc5VPnoyJMekHyrdyY9aNc49",
  "key27": "2MLwWXMrKQVHdSaFGAH7e8wS7Zs4FCzE9wjeZ4By5W8a5vnjtLWbEss2zCFhBMLskFu6cScuqpuqwgDGWSq2xsuK",
  "key28": "p3h4jPeyUroyWSiXNp99N1jDEyAD2khy7Zij5Bkdshy2i4MUPaLCWhypfwKwh4oEAQToM9M7U4xhQX6RXbFHT41",
  "key29": "3fQ72KZp72CrFYPhcEwve3CQMMb83wvgg9ESuEGWZq4wGLQmdBffmYr34EAcMnZA1EbMuNVEbfZW9RbytfXGp7YZ",
  "key30": "3VwmfFjUVBiRnu9pFsnsPcndYNhRRDuK2Wef86yxy6QVPxhyj4Ct7B9gJYMngvFQys18yFq192fvMAyZhqGLrVhK",
  "key31": "51PHRdTqY3GUNhwFGVkba2E9TBoMz19EP6v9p2Bri8zrv3jnUZ8gbUULSgUagPVATV5QYPddvriQgD2tNP3doC4d",
  "key32": "2zxk6jrHGgVZJfWxZ4FhBQxpgYh43FRDBbxXuah3xTNDhuGcAx2vJsGXSQjFzBkv2TtExqpsqHzMCCEbd1eGnTEz",
  "key33": "3JUsmH1W99tPT5uBwZz6SC1qKra5DZ4wHwHojxNV4GaC9rJoyqCSYUnTLvcrR7MUSThMY3bZNqfYGV3zPGTPunzi",
  "key34": "5AwS31L4XX5Np7YqT7CK8SrA55z5NgYD36aV5joigPjXgLjd4zcnxRGTFo492hGC2rHKrpBCNbYdD7zR2mPViBU8",
  "key35": "4cGHKPb6YapBNid1GApKoGFxtLWSx9FND3XWZJJhRJS9HmiBjVF7TnGdURWpvWM3VRpB7T2uzgz9Y8L1nZ6ZNAiP"
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
