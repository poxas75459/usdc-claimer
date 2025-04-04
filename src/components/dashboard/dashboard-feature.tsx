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
    "4taCLKsqxRfF89owQ7QhuzgncYng5rvs8ADx3hXG5yT1d4cNRnCyUhLhwYF7pNPJ2VDKRuGHyYR3dNb9CmugZo2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zYY9m2ZxFgqNfFsfYRjGz8zvYf4PS2qZAzzqCW3NbeRefSGEawwGDcGWQxz9n9JHHiiWvAiVUxrRFrGGAr9uZNT",
  "key1": "5yJCwRCAYZKXgNtSvVZxx5bCECVMMx32xVsNcuiDnXzspbXQFMvXBdyy4YgmnsPgKpE1sWkTZzkj166Md7mtdECh",
  "key2": "pc2LEkTr7TTM5sDn38kp5zMccJVumWDq3P5boaaTRdPsp5oPhTaYyWnyBtwAFJs5mbax1AoDnX9U2YrFuWsnTTC",
  "key3": "2mTB3mHQ3C6BQjruTBbb85BMdf4MXzWbgCxMKM5KydeQ5FnmXxWgKGH5Kf641aCNvMr3F39hipvKMrR2M3cLrHtc",
  "key4": "3dYaPsSPZLx459Nu9n79ka6NBNVHxRwuEmDB8nMBG2Fe6FguEq6VeeFGbX2uxnKdtPr8pGxEccCji19ESwoCtUEb",
  "key5": "39P53UKUBYt8utJhoQVTagiSwqHq85wCPHwoiWm8XCDg9mV3yzbsJLnYpHQAsFsuMt976jk8TbVch4LUssaQdRYS",
  "key6": "2anieK4q9MRNM3pcRW24ocdVMdvVz6yCDTm9qaJR7Aexm5z6mQ9EvzYEhhiaezGzbhBgzBLsCbraVXo6CdBpvoXZ",
  "key7": "2MzJf1VKSPPRq2GysMHdyxm8aJ9mv2hsYcJjRTCFvVHnKFH5Y2BBrvc9BPEDJANChxT3mthbevJUPEc4nGBSUjMW",
  "key8": "5hBcmRCmevYuqX9jcquZbepZ2PS1ReUXnBdtzpXgpu9ZFD3nTxP4vwGQQj1L9TmX1j5NBvxVQzpY6DGALoVo8WEz",
  "key9": "34FDQffBVmArjsDt8mw6EfSUKdfRD8MhieZhQJBy86H88n8QdysjjdbSZCWWNGK14gnBfb696mfZKPFHY2c9yYD",
  "key10": "39kCwBtRMpLmwN5tP8RMov7Qh1ZEeA2EptZhTNxG74cCty64bzWb8AtZ74vLHLrtfUASS2o7EFoge4sEbbzRUVPg",
  "key11": "3NVk3q3VeBKP5zmvpzzRdcUUTLYVATccCLUnFeBxcyX5WV6zWPJiPHAtsMoVC31R2LBsCe7N2LJuRnNs84DvSpBi",
  "key12": "2enWjiLmn8CbuTUow2Cx72uBn7opR6AAhyNGYYNtQYnF4PezuqQjRMhwUNiFX4BBegkFdNKfV4KaokCcP64qPQPZ",
  "key13": "2LgHPn2d7NrhSqqifcy7i7iYx3ZqgqFMhUhPhVbwieHcg1tKutJ1quoi8Qzzuqu5kwZcyH1rV9bTSxFEn5WpwXT2",
  "key14": "46Jqb6iKa4uxuMCxNKtzCgqC1NegnB8AP34Bc64aiprgTSJ5btu46Qnrhwc7yKJomajJkXorsKAnhSDF68LXRrWp",
  "key15": "4C2RYPqqqfE7BVcnbTR6wPYHPx6F29AauMCcpwU3SaxGQv4RNJLN6J9K4AK9Mr3rFW7ufQambDstKPp64rXHX1D2",
  "key16": "ycXJS44kBEhqd42MtJ2CfCeuPTaNRfYFnBMX2E75SVZPAsW8q6APbaN6k56NJnvZP5PRnKYRdck1MSNR8PYMgUt",
  "key17": "4wTQAtoSiTp3jaSPcffdBrNBXHtKnZdEmZCe6dUD5jsd8rcTZPd6RwsmNdn1oxgdBozYmEpfJGfo8SqhD9L8RQu9",
  "key18": "3bsQuiiVCVWx1KUGiM23xHcokdU9n72eyUP64dKeRpFpnMSVN3x9UKceJbkJapiUbErbSrTj12bRoL7Gv5SnyzMz",
  "key19": "2rLBvCJ9nuq8xbkFecYXHEsJrtmuMDefsrGVhHpgfDunHuTuUn8veTS2e1qU4TDH8s6ithe6WnV1muCr1SyyAjuR",
  "key20": "24V1uC1GSfayPkGQaVN2jKrzihTXg6zDXJGKirJWDVXqGBuRjZPbPMRsL1ef4NhqLG5YHzhWVY3SRVhcAqCwD5t8",
  "key21": "2TAwJgt6ZLjsB1uB8HCfYhtQ92GMXPjWAPFMGKxcbt9JoWwd1bSXK4dR8GxtKiVVbeJjibtzuexASnRCVNqBvopv",
  "key22": "3Pz69tS88RCwYAr16QX1bY29V4vKtQ5YcuaAYtvbnZd8F7U4RL4UVYpC4zJMxdiKo4swFjtVSaNPWH6un9mscE2u",
  "key23": "GdXFtWAUhi938S63qZ5YDGuVKtg2grwQs6GmeZN57CKyj4mjGmjpzSqdTAxkoNXo9bv6FEtXq5hASCxHrJLitLv",
  "key24": "2WPnMzUxtMaFRn946VFycvvowPU2j8Z1fXXZcgxeM3MZ8dyqU5eU7kyzqrHd2uRY5dkK1AUYTbtcrcBa9pxYwsmZ",
  "key25": "2VVqY4ELgCuYoFcmWcbYbgtfGa6Vp3MTSMNw5RoBUz1QrJcPtc1rGXzyF86osBeSXkfR9zWmZX5VHhUQWyqnLzSg",
  "key26": "5ZAkqV8Yi9pRSt4LnCSx1JLd97rooaY8TRexaTdgmMBKbwNC5wKgqcqPVHBZvNR59A6TnFqYB3CgjAB8nPvNzSb7",
  "key27": "3D4hE8egMun48jWFEESjSz1oLVgaKP9d2eafEfzBDNYWXZhWEYmu8XjwJmJHg2wZDiLxYyLuTXEESyvPNNXUXd1r",
  "key28": "N87o5SJmTE2EgE1rL2TLuEAZTCoP1ujuqKZAzCtzAzYmw6Je3vwvMRwjb2YpZvQRfr5ZyPyHig55P1VMvpd1Ehh",
  "key29": "2cZ7GFogjDNvwb8vXZ6qzHypRaMJfCjvSMqrfHn3yTfrkk7Ez9BY7YkknkdVLNAdfQvLbi3gudbAFP64QNt3Cz38",
  "key30": "3vGY5jqMX81qHqRYYVweDan7L9zyeP2aoaWBPXP6GNEqUnSevYYqZoN12KCjP7qtDW1izzEQr87K7C8cMQh38BYL",
  "key31": "3pwoNZT576ET36dtiUAsU3Jn3Jqd3B9gWQQRgnHTQ3qozeU4CGBZbq2GwFRvs4A7gvnK5FwVnhqLE2zYCUGLd37v",
  "key32": "4Lb9xcsAciUhMBo88Eu92wTxALW9uxSt312VbNHQTjFHYCWBQHtU9Vrym1PMzWi3mvxyHwKUYTYWeRcPR54opFdN",
  "key33": "2xZUJ7yqejsmdLY4ChiFaxsYa5vWA7o4epf3JPjxLzAZqxBeBtxWPBtG4nKAuZFoGFQmtfZMBGeixx5zQ3Zm1BVK",
  "key34": "5PA4ZHqKuWQtCn81cSx9Z5KJHNygbVqngc4Mc24SsjTVEht2QRfqB4KXHNxETJNC71jugwViyxeJ7fPd57REnrmm",
  "key35": "3xMrNCmpn5XRyxfGoGTSBpTcX4sMZWKQTHEmWbqCDnNxryYtqYE1eUhSpL6N6tZ3zeTixQApZG4uKPNKGTv9Pohi"
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
