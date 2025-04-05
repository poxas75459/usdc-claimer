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
    "2hXAvmXfBoyaccAJL2rS4PkNPboAsfhb6H4McGaeZ8wEqzzA4KARyY7aj4yBPFntcCnhjHSHT1qLiuaD3ytNJttW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EXrSfRywpwymB33WRaqSdG51kcyC8NJ6eQm2j1vExw5hvrALaJrLhFDJrHubzZPXvUoDRAC2AVa7H3MqfhMxKNN",
  "key1": "ivZZvqhCGGowWC3a94zkwDCDHj2GEeU3ozBmU51qSSBHzMZ2smgngJ3boUmGZ6nFsXh5DMY9qMjFvnH9CdHjJ2J",
  "key2": "3fekboAq26WNtj5zGSiKzMuqxyFZWARmauXGPGgFP1oanNoTWusPhmXLRzxdQzyrYW6NUHA4BuoZySoJevpL4vgu",
  "key3": "TsHpmQnJDEzWUXdcvUzBWMp5eSjFxmKSyb65ymSpss381S8eM3Xd5FiiEdoymkN1exK6RkA4Bzxr2aU8Wmzo8C1",
  "key4": "32Ga4Jkf6MHMnt2LWnecjEhXbAN4DwbLdjrZj2UiX5vWER1NW38KkdgsrSmzXDM9j1KVHFDy8TNwp8bs1SRCjugz",
  "key5": "5s1SiaxUQvDTX7tWgzypbkRJdJ77z6dZrepRNMuAnfWeR5c8v8ok1kUGYhpS9ua2tf9pMSEcs3hBdmvpw4w7a7YM",
  "key6": "uABqhSuf1fZBZaUvsAcx9qzcUFbEr4W3cFvftj1cJqR6PRVcQP7tBv3NfD3bSZ1AXLAwrbatmYez2x9YyuqX5Mb",
  "key7": "4GBEirN7a7aKn3n7eVbALxmf4XnGdmVJVRnJsKzEiTN93THGK4eUPb9wgrdHs19rVh6vvjruTXxSiDoMjD8PTgrz",
  "key8": "4CzVmedryfew5NNzX1jRspLW7tdXGxz76hJN4uEE9TJVmhQ1Ycc6NePZELXp17DzwfREAQ9g2pZrTcaydFPG7BXx",
  "key9": "Z92sCHdLmxMSZ4phnLfFP8PSAvcr5RQZXEjL31eCQKjWMSntJE3YBzMPNTc6B5VENpRya6NR5u3wmqcwFTYPk22",
  "key10": "2SaRbhDaavEmSfaQWYibnuuoapAa2nohmu8sNSzXuWCbMrAWGxBpLRhNK4vqMN1Cjss8zmeuRaQpHMFTn62oFWGx",
  "key11": "2HYhJFbPNpUwr3NhMM3Y9ErTSvDAgwsFKNRHhZQvUPA1TBzLwsDndwuQoM89bCPUrxjBsFo4Zgw3JXVhSLPnnjbY",
  "key12": "3ivnNehDeHbgxkPEQkfpqLMp2kkEnij9MpUFmVt5sKaNphsaQ5vybDjuTpwd5X7vB5nHpWiFePRFTZQDa4RuQcPJ",
  "key13": "wm5vc8qXspJM8G9ZgDEj7GZwhxeDUQJ8uFox4JzjrZBrpJsyBWW482tCgk7yEpnS9uBdx333Kg5EuJS2tFu9UBp",
  "key14": "5Zg3g3irnqbk4K9u1BChHF83JXhZaZx1UcYDkG9NydKZsEj25rTVDXNhnjYRHiTsjELuXz82ZnHvBCEsg3Bqs3Ra",
  "key15": "3RczesHYG9VTajxp2o9DzjmKs1PKUJA8PurU9CrbWgmbxzgMYzb8kbYWCo7xDLYpt7D4ryjio3Htw1B3cxH7uk2Y",
  "key16": "2euDfgpjArUTBk5ZfQjgrsXKxvxeyACx2ig6ofNiCeWC5UL1LXR432g3DmHf6tq1L9b2ARAR19jg6JY6pBWUpRTr",
  "key17": "2CRGNbxgZx8Xig6fFTkqDrFPqgEydNzckkLaatJiz1F44GBVvD6f2MyB6SvzEe4CzcWr2ATuXRKs4iWSuAuPowqD",
  "key18": "5VpFLgh7MZy886Mo1QpFdKgpcEtFPqsk7qPwFeowqrzhQXDbbErKvPLaueNaxPUZtXQAE9KzxV4Z1rkSEdyVVSzB",
  "key19": "4EVmN56gbYqXv4Mkacr6MwYi5tf3LdFLz7XNrZnLZ1xraRCQhrqS7mushe1AGYo33DvqKRFFXXaiTuur6yA6ZJXy",
  "key20": "2JoMtWmgrxe44oXd3uy5Ttt57yAHiYtcTsU44UxmUDuFfDocfTs1mY1yPaS1uXefm4v7PXVokvvtUujutxHAYSBr",
  "key21": "2ho49yiZXpeL3td346qx79jqkwmiz2SLTgDqv5CXrfNNLGgKwykByKAZxiPEpcFXuyToMNtGJx9rXQXEfX2MbM6",
  "key22": "5BpabPWhqvVmm2KgJ3ZN5bKzYB8AcWtDUjDT4sYDWKQBiwKBg4FSi4DpcbaxvoG4t5s5f695S4HKg6CLoz3PbMSD",
  "key23": "KLkDXKY5hvtroEywXU2G3JyNynQ83uqQzHG2CZmTiFGsXhNS7o77t1NBVHZZvfgzqbEdFnE7qS1DGzSHfuctAPN",
  "key24": "4QZcRAAYg4FQdFJvKZmNM7xw9oeCqwYYwRgWRHTBN8R3WRACyepnGeAXdk2rLSiTSAxpmcVhNqSWu6pwTk96aavw",
  "key25": "54xjNU1u6wA1aq6wqKsaHV8ppgyRUeytKictGiywQyHfXCdrm9sW4fjTgx62nNrK2m89LBMMYtNQArG1nKpM1utj",
  "key26": "G1LGhRAYCfiLcKYVfMkGT4d5KapBV1oyqrfkWUD8yZZ8Lk73dKAaxuBE7ERaaYSoUzVaT8GvVgj2yCV7yNVSt9d",
  "key27": "26nzNEXmoehaEa9fwC5FAXSSpZbYNu4pz2dRJNAXHTp4FocTK5LwHp84KnSzwXVHSCzziZrQZsv8rHBS2fNBz1TA",
  "key28": "4iiRQetqRXuQ8Ebo8iwrpa8KHo6Kq4PgGohDFPBt8FN1AjDYPesjaKbGQawEn1epUWCWUJHU2cbSDPDwMBHmFhbg",
  "key29": "rxJ6ZZfJNHH3FjWScSvV6XWyWbYDKTok6TpuPbhuZ72EVjWdhi5KyUX3oMko3KwMHhEfgmPL7WUQK5z28wyLGas",
  "key30": "5zrnFjEfHAJNZq9D3WQPCK96mLHmzRnrtPjnTsyuMW5oUw7WtEay33sDVYHcEAQrVRBdJ7JbaaTxzbAkHbtFPYVz",
  "key31": "3bRjM97nBcs2GT2eN4ANqXbTPXbxvcQhQZU3eqW293WVn2UfXHjWcqZ2Un7vBXiYuKVPAVavKHdtjcPq336njzhM",
  "key32": "3AeopcEAsBnzTfczbn5HhwFspK9gxKycL7obNFD6cfvnWDtKa6hzctDwwPS5nZXfVfyf2ffveJMmgStg4gugveVE",
  "key33": "38cCthEMqzutiPx3MfByStk4tzbidGyJgoJr3YM4BmzGjAxvw5nKWxEDjEm3eDhDhC6fWhMCA7agMcTJs485xPe2",
  "key34": "3U4aFRYnuiR6Whjt8o3AEpgVeWxEotvvyuVBz2L4GAUay1SS8F6AuhD8CbXmFYecfHdaked9wvTunT7Dno7t5s3D"
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
