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
    "5fFYui22bUfiPWUmky3227t3V8tmjgzHF9R8k6XmEm8BN5e4Cg2kTsGXwgeTsg7Dj2NgbJUR1zP8RsbPrUS56hCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qbYvt6d6je5BQvDub5KyFQnivR61S1hpvJXL9pSjy9xyXhGwDW2fYmTs5AiN8TCZL8awFXMXa8DhNoXQxYed3Du",
  "key1": "2CKEREdYp8vx13KojpBcoRtYfTHL1zaCLq4XUjTDsCuLHvrfGsaBfaz4LVESVLDjztyfnLtsyUPbJuwP2PYfyLXw",
  "key2": "2dSMqU9CsSqNVLs94F9HXqpzyvth6AjAFRzwHLEcCrEesL3pFHZ3VeWC7BEwg4vDnPyR8Kpajtv5qhYqEJC8Z8gZ",
  "key3": "5HYjkqgy87GZkpt8mS19HixGpiyJnnGjjFt3E8wPjPuQaqiyBkPiekPCVKD9fft1Ya7X6B4cmpsSFbqeP3zWkhKx",
  "key4": "333nPgPyQUhQhssaLc4e59acxz6EW9X52NFz4rfWMSjKjUAd7A7jwLu5JyHi8wUMCbRrY71ehMNpByQEs7qxESqg",
  "key5": "4S9bbwZxkaTFbUr7XzimcKvwnBPR1i3Kxo1syNftydHKrMwpDb7EcYpiHcAzYrDEibxY47seV57V5MUTh6KaEKRt",
  "key6": "63xwY4LS9JP7HmTbgN1G4xQr6k7HsF9r8JrVebEv5UaAPCSQbNJnU2gttV8rbGvXYb4jMwotR5gdPfkm5hx3aDxA",
  "key7": "52C4nLy8CXMZVsN7BCSFPvQUTK46Lvz4Hwez3uk2BqESR75PrwaJ7HddWVzMkkUt8DFjmtK3T6HSqxzz7YJPFLfA",
  "key8": "59pAL1BcWbZBz9nJZq31g7Nz6HSTyHULMz1pVKa7EXM8wBi8XGDd69zeJZsqyBH5vABPPm7eaqRKaZASzBA9sd5Z",
  "key9": "4Prf9aV2QvmYUzyekaVJtcefNRv9Kfzvhv4HuDUHKjiRD38pJJM3J91tpBTfTh1kHCZvbggWBoVpSB3zS3rdVCyQ",
  "key10": "uuMYH7B2PYCFXMpSRwDqrSahr4XtV9noZgc8DJcbntLLNBRMx1SFpfaEJ94ZyPfvRfPdPTnUPdqfQWbXzHrs7Tq",
  "key11": "2sWmNCyNgkKUSQJPHCsm7StyFKYQ9Ec84Gbp71Qaf3HiX9EcwaALNAX22WD3Jb3fCkJWPnCuhXFyCrrnp3XGosSo",
  "key12": "46FCCngJyUY1LgT13BK6aMfsiygzQWy11yaDn6KCWGyXN4qok4xhdHr67w8YdYXsLMkpdWe49yQAGaTbAK8RuHtC",
  "key13": "3icBKUPC2FT8QaUwciN2ds5s4csRUiUB3oC7xMdEo721nSxwB45jW1CYzPo77vDzR6JVgCtAC52XcHFicCCz7YSw",
  "key14": "3Ju7EiwZr58u4cHwrXv6uFrcVDAQpaWytdZAJQsqnBvNNCDMecGpN6K6hEAFfj7L6pcWBr2DwsJuyisv9NWD38Sp",
  "key15": "Bg6tkE3e6B1QsF57YXKDX8oHpGPnhkHXModsaMKa8XwXSo1ii35sarMrN6JonkPPD3ukD66PVYHJqZmHaQPVrmZ",
  "key16": "3DHHqD3tL1iD3wb8yoraoCYE5F2Rxyf63sDALRXohdBipsZ92FvYYxhVDwm67M3wnxKyv8yj3py3Q2tgVW64ePPk",
  "key17": "2tw6rW99GAjR1MxQXYV7DQeSm9SgxgZpGxUYsaf6qWbSR9GE5D8kpZBGqphUNwwzFTKSR2QB24zd23LbTW8M8Gcj",
  "key18": "2w4jeZKPTZTcrJuY7yeTWZW8L3vdRRmz3Ri4jqQhBeiT3RV7S519xHYiJaKreJEbH7cYCRxeaFA7fqTupbAkS8F6",
  "key19": "5QhG7EjZhEAqQx4C5wJgt2ej8PaLweLtTQT6ccHq2u5iFJzBSikHnec33bwzMnn6nn4N1wtmGKiLvHV7gnFs17Gt",
  "key20": "wbgUnjVxFgbhEgtYhz3MgvPWVn1H2T9aCNUgekKjFMa68nFxVVA2f8ZGgW2U4BWcuBZ8wqiiyzFjmsKUK5D4qfX",
  "key21": "4mFk6mAUQEtTRgDAq6UvhCeK8qQWQCoEiA3edzXVa1ft75fkUFNRn2uMsHtLoDb7yyuPqPwAtB3453Xtio7BE5RN",
  "key22": "ZdLGbeLWzWC316dKLabMFvaGTn1s2qCYdF3Gd94cKVHRX8r2trF6Ek5B5wRNaEAmAmqueYdfWgximEW3bvmbE5B",
  "key23": "UScQCYhkkxhEAwUHrKE2yWpQ3WJc391fbGzLVniRZwLePfgD6KiZ8vWy43P9L7UQewPJkmeVevMyXaLNuMPLCRG",
  "key24": "5L5PBYGK6J2FdHAC2B7EkE9R76HaSWpEMGWLyrxLPr4UgPPeEYhi1fK3izK5hrA1cu8sL8eYcVzf6fbiUYW6yaeG",
  "key25": "4h1UTDHfpcGJqRVaXBM7dbfj6KbK8MHnDDrZ5x4ZN3ULxZ4sje68aKastLQVUSYuhgsvDSUF6H5xyuQna6ceMyqS",
  "key26": "2QQYQL3wGbxvPSwbEhag8A2ybLexwoBeJkeVcLKRYcFbPSbrRi4KsT5Rz5RjXtE6yerqtjtMo5iYRSXjJpxQYgtb",
  "key27": "sRVAUKRNU7DXzJVm5k3JJmovNENjpeiDvLk4z7jJes3A48w573As8KVEMYgntjTcBjRkbynK5J9fFCeBjuq9JN3",
  "key28": "3H2wuF2bWVGTNf7toc1SHb1Nt8ehz6GNn5jb1zvGRbhX2GEQ6wYDBsUrjwqct8Kk6RKmzez5Ne9LWh3nEL9pVVWg",
  "key29": "4HzwM7ztYaw3EUhVufU9pm1NDAVeUWwMewBCDnsH1N6C2YrAo3JvxEQdSqDB6TEa2KphszB5djRmfkBS9LTbC5Eh"
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
