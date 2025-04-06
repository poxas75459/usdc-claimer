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
    "2KCBp3xif3sS7y5GTRbZuxEAtJyUbep5GxQQyPAzEcqAej2kt3ZkxfpKNjQwnfcj5iaZ5s5C9yYe5d7XVJgGX7qC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y7kbxRKjxz6ntiFqYYZsuiwGDvEz64WkXUJTnNaLtYiLq63Dftyf1LyqUu56C1H7mR68BYZ18tj3W6ZSNpJFLEA",
  "key1": "63Kb6penPxGTv9nDJXBTX4gMMtzMJdLbb3ynZVXRcWncTacEVgyAe1K4iV1LBc1y9u6BL1QKCSTkWV9M1wWPmVWv",
  "key2": "41g45283EZacR7ubFBK1MC2FY86zRGJDvcJJqRSHr2ndCFBRqf2HNSKgdgku79xDzgmaDmMgbPwTUcGNFMCEoY47",
  "key3": "GYF86g9L3sjGm6y83Z4AWcKDjr8KSJtzuFtVXUn1SMaPzxPjojQeuHks7fxrhXdfaGJeXmZ2pDnaXrtodHi4mbm",
  "key4": "hzQsTU9ELzK6HFnkMzjZj9Vmb5KRvoPiQjjtaXFVLT8yWZn8LuNdfrA3dJLpC85uJBPiENxi7EHkoU4hAmc9vC3",
  "key5": "2pMChcicp4QLCqz9417rj6JtnNsiyCh9kJrVnA7U3aJM6Ljtm5rLFms87dtv8YCr9kSTYTKvfRV76YVtacUcC4Fi",
  "key6": "5TQnYRQNm6QRpTCm3QnzTEobtbYHCSWKFuzWrYQapLn9fj661cQrFAQEC8ojf5yrRaJkAHA8vtdzyj2UiyXnSEBK",
  "key7": "65upQZHWhgvEZZyUfyWJfxdA4gJkFoZmHA3KgsbWV1mXPdYfP6ZYSsT77tVpuVgqxPo4poZxCKBPg48zs1qQhoX2",
  "key8": "21aB7zyzh1wSS8nXBGaZR9MFxHyhFZcuYCTHBiHc5pS2LHofQpehfYKVDw1hq36cxoGUXRWpznBU56SWB8DsYPo6",
  "key9": "3sp15H328gjjq5XY9rMHJYKLB5nRJhw2dyYcF5BmduGAJ5MVoqaC7ApZymC6EYUHq14SPzNdovnirozBEKSs43cU",
  "key10": "2Zd84AP74CBgg1b8UrA1FiQ5GVfJungSTNbu1oPrtDC6TJouvVFXruwGi1ShuNsQjoKE1N9AxE2E3sBn6rBRo2k8",
  "key11": "ANDm2h5pWK1Z7NjxPwKrZJyAcqZ1o2PDLzt2qYj8CE17goKxdVmhiBEtgU9z5AaYJc3GTDbAC2u356EJFBnbwrV",
  "key12": "3enMwQdaBxbwaoaBszd71AwXmJUR3fFYPhuG8JoQEDs8Y97LVABuRNZuFc7UdLNMa2R5G5vA52LZUr1opBimnDnp",
  "key13": "4m2hSm4eQP5ZpeHtwqrpsjYwTkCmbCysXgHrB4A1G3vCBZpWfNzRgdvNdqFXbEyNGv9HhWK5jy4hqrxYpYZowpE6",
  "key14": "zacPPfoXvJjzcT8AsRCuS6KuzsAJCHWAhXDLoww1kN7jRHmbwNduy9aSgVtaCLhtNVvmx44b9mtASxCytKNM6gh",
  "key15": "5xRZyJAGegxrnt9iRQpATJKHFkoBvqEKWqHrCPBQq9p7XNuP9NGb6SAF2Xf2ZLAJm1eoi2zz3jFf5RMGUpEbHdQu",
  "key16": "xqy2UnTAird1pVMfvWSEYtFUVZaXL5NQDvjzrwxtEChN4eRKbG8Uzid4tjZRYj29aJX23cBntaUkgh3H4R5Yak3",
  "key17": "4HhQkbXQmbA6GUvPt3YQbyxbnampTTFdgdvJKWFQm3RQ6EiSRa9TyeFUprFwiBHT32DA8QiNzbJ3JeV1mhF9S6Sj",
  "key18": "QEj8hUSg1hPpR9uwZoNHZtvzv1RNFqCXrXng1T8faEiZnhSrHkycd7u2y5ab1AYrkVZPZQjdi9vLSHazNuq2wW9",
  "key19": "3Ymk6jzEiPW7eurPLRAST7MCxNvZrFqNbJSWQeheuD4a32KhMLQ8HLDepmsXmteB411dycYmxEne6eneJkwZ1kk3",
  "key20": "wwVPGT7AdQp7U9TZeY6f5BPCKtefUZPBfBRfidduqNQNZMDWLxscrvv2NPPJXRsgvff5332A4bcgRsYCBXhffHQ",
  "key21": "2NzG9rkDAVVw9TKieSHLLN6x9EM9DTbp2xTPuZ3NRpEyKWfnLmGYkTYsPHVArFBJR5VRFxxKT9KQQqZxzXoAEfSS",
  "key22": "4euHhKV3M4ykVPU1magtZwm3fHjcRu43JpEytY4CsboUwvHCxPK6Gapqoawo4vXp3j8sYsWN7oJuNqiVCVmJQJJ9",
  "key23": "tg3BtbJJVmAX28rM7Y3KcVcPJnYxk41yqfPbmFFpz1gLDVfGb7gFFqghjtNkZmdv9E2EFocugAnxgJc6oD3sLwm",
  "key24": "uHLMxZVigpQ3QeSEUvXKrPGxM7PWoGRUiJMTnR5uKKLHEGdALrHLie3MtVfqNxjPFoHvSobD8dKzKojBGxH7agd",
  "key25": "4DqEvq6yQSjedq4EuvSW3UtERErGSxv6gvrDSnF2QA9bYwTsQUVDRMtAjzDs1tjAYjtcc3sCXPtRqmPGhYoA9XdY",
  "key26": "4EcYXgg23kJXMc6M4XNBmx9m6e7hGBx5Wd11Be3YhA6x7u2CFRmZpov7PWNeqX9ZAgxieCG5LofcVzTLQ6BbouFM",
  "key27": "5L4JLG5nhLs8riQcPm77ghwwrE1z1eTGSxme4N2Em1JtEW7YScWiLvyZYU2SpKVpo5fV4Ao36fYi43YAVjQwrGiY",
  "key28": "2ZoaUiqkgbfULx8E9dyiw4xWnoKPVVoGL9o9ZAXfmbCcLCzL6gp7XamZmcBneX1aVgGyVAoGK9NDBE2jBjncHp5c",
  "key29": "5N1TqGRKVY4vCiT2iphRAxaWVaZ1MDzqpbpcrNLZvorekKo3auFDoGEuSPuMVzXuC3TFAWJ7a75hLeWDu7gVVeMa",
  "key30": "2BrcKVBja9ws9t1tHVvASaW5Xe7oqDxja5yDcrmayTWenYUPzBdYE3P28rCoYtxak6WMkC5wJcWfEvZ9QszQZdaD",
  "key31": "44cugy3CVUcZ9q9YjMzevKhp1vhkNTyz9iGpND7mH56u1FtS3paSmR4hdAKabm7ygZuUs9MgQDTVNBVWVhWAfftj",
  "key32": "5pcoaJFTvN2z7fXgkPxv2yNVKV57dk5sD8BFVDrE7J66cwNvZTWzZg86qgMv6rjk6AStuaayj9SHVL8Eub7Mh1fq",
  "key33": "4FTUtcQEVX82j2or2Y9zXfFos2VQiCSWzsNQWTkiDjjAtfccmNbMq4ArcP5CHHXJbHKiP4r7bMyLEiNyofbAhb6",
  "key34": "4jhNFehyz9NSbHDcagkzrikveDSwuEoacVDKB85XBDVRhRfNpDqjXJw1WGJikaiw5aigyUBKK85wct6VUHiSB95p",
  "key35": "2NWSR3b1G93gwPJEGZEVRA7RxymLryV1rFiSJGvuuWfGg6wa9W4mee7TBKui9fGET3WcWhr2V2msVU34EiE9Ra8A",
  "key36": "p72btXUuNNLFjZfGK1seRYBjBmqSWaY9sgYzF78Be9nv8Mfw9aTE4sE3kth9gn1HrLvFYxZVibFmc46TaZ4foiD",
  "key37": "4z6NummuG3a3kfDTpKKgcEfi1zXgfgEP2RWEZrLgb866rURhsRPJ6PULAw5KgoRMe3iwsbbSRwuwYwKk7rD93idZ"
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
