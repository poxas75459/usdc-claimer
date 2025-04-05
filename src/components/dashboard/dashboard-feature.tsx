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
    "2fRGYq7pCjRkJnUztXS6zsHansEfHDJdPXLBsTEReiU49wGU3zrpR6A32UpFUBw25Wfg8DThLLP8yy7b9P8q46Up"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ttLMtWeKwr7DmJwbR8hCTmmBaRTacTDMrdoVEmccuEnFGpa1guhu9WYmouPxFCykinBWxRzVCpEsgFKwANdpcmd",
  "key1": "ByRwZjnQSZqghSwBavEnp4W9NvWCs64us7JnsVxEmribXm6VSKJCef84DzTYGXuqNRQVNdX8iCh3XkwCB2utqc6",
  "key2": "654DuKsXZwG72AjdqqLuGusLGH54qcXLDBxaCJusiFuWyNKYmD151MmQMYmf3fp8oirbEaFTKz34UG5PMEFQN6kb",
  "key3": "2S6NtKrpymVvEwGsPf5TtTFXMPMpJnRq1Z1x341KW7yLUjZzEUcLfxCUpASJNeBVPQKqqTvEEa989Y9LdCuEBWFM",
  "key4": "3DTuLK6xNw16VqLwdYkh5CZBKWfAbYiddL8opBYiPcL7fpVmq8Ti2nAkJjfNLEHUZ2gt8rXjcWbb1MnyNK5Mb8hh",
  "key5": "JhEZJAqstvjdZF7LD4Y782KwPaMKoxxxBTsMkY73kesUhr6Lf74yc6wiM8WdaCccenKABHanT2rKAuytMRxSd2v",
  "key6": "5bhemNLwNZCFoncR8y7KK1HGZJinfQezUpxEyVPSTd955RFcgxaiZthmNFqaS8ZZtRxnvf8PduWFq8BHvRXGyeDY",
  "key7": "2hdqzvnePj4wfFnbKbGm3f9YoBDYpMAjjYWH5HULFT2KZhUG1cKsob8Vhc5iYM3BzfG2GiTqeKoQhRwJ1uewPHD1",
  "key8": "4MdSKd8DFLVERhAxT4JmfzpUq3jEYbSYHG7oervyT5dK1pLJCiogqAWbmyvr8cmD37i4eJTchXso5GLe26JzCrFb",
  "key9": "37Bz9BGrZrfoeVnwPtvHpiPnsomGDKpQvJeazoMbzAYegDan1kbJnijY7mVNZxDRP5MLKikhCpDyf7DS81aipKm2",
  "key10": "1z1fSNR5FEzhy32zx8VdCdr2dHFwkCtJh1aP1hhMUayHoNDqKaoCyugFr9AmsJ7rv5kGCD14w35W9MNJr3iZ1y1",
  "key11": "tT1fqZEfP7BCfotZ7zRfHX6s76J6e7C7MhjHDuJNrYMcQFMVaaCvvnVeMeBEXaYqPr1sgs2HJMJNydfBpPjKn5h",
  "key12": "4TEQTEjUxdiKFMQokzPTyto4fwwKjrK162VwX6rYYJFk3aA2Nnib6G1cDYkoTqNVPZdinDvuSs3AtqMcrXBMbebg",
  "key13": "2pHoVHCwmTMaiwZvYhTKTN7iTezWuA9hypGLTS6P6A8Z3BFWrjKrGPkQ2VZtUxWWJGmJFXrU2DttZV6UxTaCbFk7",
  "key14": "5u84XXaRuU1fhkmaQUss58rgb2Afxw1GVpJoev9Rgi1wpjBsWMEeBQrWFPtqvpYCfqZBG3p4j9jKxfWJdUqw8465",
  "key15": "5c9X9F16F7hYnEeMSig3w5S6jk6HTqCRAVtGuFkoZH1rNRJaBqmhruoBQR4zNwoV9HdWHiHYYLQMERqJbShAhSuj",
  "key16": "3Cnezjfn1aTu31iTCe9EYtVKsLf9hktMRr9RDkmWuttcvNppnbdqfq9ueHeSYe7bNY5NgAe74vcs24BiW1WjGMwU",
  "key17": "2UFmphv5UVfcXJMSfaepn82pJbLbAzSLtahswUagz2qvZmYZWjiReJQTwqcwAMUDv5iB8LBW4LHedeHnU2cJhHn9",
  "key18": "2L1ixqsnaQGAimkgAwwxzkFwiahTq6pcC2BThNT4LBzNGzUEizBgCubtoRvn8B1JtSc5L5DoAMRTUyFWy8a26kgX",
  "key19": "2oBXK4MNokev1GNHHygtZiNzAYkN496nV7bqgn1MsmLeRuWfdYby68Du96eBxJG9V1unKEfGrRVjqeYHxFWR1Uo",
  "key20": "3opHwXUZvM1gEECBgcUhcjjueSNu4JMhop4jMwiPuBvRWRSvD8kc2kbGkEv9VthbgZ85zxq8GQN9ouo3VEYxZD7y",
  "key21": "2pkGLq8nDxk9KwW6sgLaEf8VoDfGFXFj7LbDX4prKniikZAgpTZA7qqN1HcQxDpwocrQPgrixeQBRqhUoswEj2qT",
  "key22": "2AyP9zEiCFLoDbGBeNWE5mFfVQmg2j1nXxNMkcMak3K7wZeg7gAx68RzvXsfYgThCBufpSA6iPn2TihTMk4y7KvR",
  "key23": "2kPKZx5VyshDkZzJTdzfBbyMhQZnQJGPfyDhS8G8Woh1PtY3xQJgoVUZYr4NCiqGdr8GbRLeVJsU9R1Br8eyKS4L",
  "key24": "3JXCmaVevioLkSPYm2AenLuxrw3yXnZb35XzQRTcJb6ddutL92YjbkG2xBfyHGJsJahdyTd5iZ6s4UT3wDPF5sHe",
  "key25": "3wPj1KgVAUFTZchCYa7fDMAxf9HcPdyj9oBkPgWC8UwGWz7QuUmR4LLcyD6kttbZCbt7Epf2HNpLVsFGmwyf259n",
  "key26": "2q8m8uRvTBD5zvXd5aTs9AsQ2pBG5Bgh38iAAF1DLSgDabCnEuJzt3F6DVaHtarSKr8tThZXrYUrBHJ1RTDfpRro",
  "key27": "3MPkH2WYLJYiYVA5VGDB4hkrxN23sJEsG1py6A1wk4wnZZb2mtDxAVChq1dEAhAQYLyj2zqAbgeQ6ZKkKPqEm7Kn",
  "key28": "nFrvMUvFkqbkbWXGRjzoqT3fhJ3H7VJBMQxbsd53kWUvjaPFZ4F6SwPRMja9CzoDrKG9tn2NmSbQhRjj4Xc6zfX",
  "key29": "4uNcDtbMJiphzQmLu51mVSeC6FxAiejn5omuzP8S2hBYhbQswnxSj6M6qjNkbZQsZx5bzHowQ9D4J7yvT84UKcBD",
  "key30": "2owBXokWBccF48WWTqD2ZcQgJNJPLPGD96rg7NCWumzqD8zeusca1U5FjXNLGpLUrZXVDzhpVWiouoLCNsNSCxbv",
  "key31": "5zckXC2ABoV9MMDszHmSZoxzvPvCQ5xeHUnZXrUaaz3igFedSHP7vLj27cnLMnod3CMvMfKbzppjrRFaXdyy1xx3",
  "key32": "5zjTqRwx5i3aw6NwA1Gydo9a9K1Gga3Deamy4z3PjPjFzKPAXhhjbiSRgaG6ppX8JiNTH171LKWjLqtbRN6oZLVz",
  "key33": "54rgPFbbcyRu8paKPbjRknBnX7yRNE31XCdSpzDafdggmvgcxXn1fWPjE63ZbmxHJNAcZXSB7qYpqCQxXsFopHk7",
  "key34": "2tJ1tDTNdTam5zvpwLsTgbT8HfR6nzUPu4Xz6x1Hx5d5G6EQj9Ask8WKK8Fm5E8dqUh29mghJDcvKWtuDktEtPg2",
  "key35": "3qcme8aytpz3vKWu8pkRSeDMm3vY55KBfy2tB38BWxYKteDHfTszfro3gQ6kLTHpU6GqPPrjUpxzVMdPuCHWjGb5",
  "key36": "od3snfd1ZCnuppViEBtbrGnbnJePMpbhBpZNke2TD68tTynoyDBCfMbiCrMR46PdhNN2HmABKSBd1DMNQzT6cs6",
  "key37": "Yq4K38UjnrTK7vQzVyL1coB5CPZAT514W1WaVj1a7cqjhCW8CRUqicRppeWqLzhx45JeeJDr6qyAD5dwi36ERBH",
  "key38": "4ETke4Q8m16VAjYf2urV9bLhrVedyyE8dNK9UbGYMqssoU1XoCtZkQEwhsWxohmjAe3DonpGvRmVaWJWcyNgkKwz",
  "key39": "4zn1kjBoiiZkCRvXKvQWc9A5PmSw8mrVCJ5BjhmtEjUAZ3aCta1UBYAKwc6gCU4L8cinUM1pxXkijBc67Jh5bmd",
  "key40": "52AVPo9Tt1155NEgLCATbGk431uCgQiYwAM8EhqK6mjz24RqQFByRDSzVfcDUidF1sGCE96RXTbp9HZEXsYUQQWp",
  "key41": "3YaG6cPrfuYvpfhp36TfcT6dQMfFRe5ptjFHGdFVb8msLAgNXkiYp7QUDPVvjECDvLmxZ7NhLDSZSRkoocKLUxHW"
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
