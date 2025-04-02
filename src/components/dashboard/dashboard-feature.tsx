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
    "4phfsQ766sx8MgncLM5GaJ7EB7E39ZVVwNpFUo5yLoPLeyUdGMB1ESRa999GCp67dkcaeUUAVhp1K7WmyjPo5AE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lhy738JSWCLDFagoxhbohoA3bGxN4F6rXLDnPzYAXJhLjFdW6uWxDC2koGFTAf49kctKrJCKQNYiu3MehFHJRX3",
  "key1": "67TAgXtvXnBX4gnyRtnQDu23giWDQ7d7GuuYbctuX9wtyFbhifn9V17miey3w1cm2pyYqYEcuWdTwqd4Lm8NVHvN",
  "key2": "5A4BZFo7KdpzT6Zx7xHFwZwZW1QGMtaSrKo1vgzjezQr89GDjfacPvaecCNg6876wsD2XhcMRZGiPkLUHyz3q3wR",
  "key3": "3uLkp9tMSs7srjJBEW4GWDu5UfEaAp9crFheu7PTgXgh3aKSJCJDRWrvmiUvurKsGtHGcUhRu4srnf6rcu58JJQo",
  "key4": "4h53Nz3zwyHUg1iJgedYCeaema72qqQoAVnijf3JtitYC8ehERS46ephpms7bfQgbV1r2WnyHYBbkE73LhzuWs9w",
  "key5": "4mncEYgSHyprAJEpHEoiBfWwFozvCdBC2VCiV2sFimfVBi893BhxC4GMiiD7MDJew7wvpc9KzRRJECZTK9Uhqfb",
  "key6": "5oJXc63SEkkcAzPtewU5z2aAQv2HrbjVDQGDkfQTfczwD3AzwpVjrjMyu4P4RnfznPzURWB5tzfCNxWDtw5Qgn7T",
  "key7": "4e8LLzZnhsqmR3W6oR1p2HtKgTSdKLmw4DAtgE11eRTZuXcH9tWhCb1ePZWKAYijYxMKeHzEkYypZH71LK3Kq6o2",
  "key8": "HWz7UCEe35ucf7EUZ4ZTm64XcbfTjGvJu1qaBifL7MdPHQ62GhbEFftjeywzstsGP8KR2t4JnZH8iFJK8EpSCLE",
  "key9": "43m3THYvTBAui17KqdouoqeDux9Eyu2z17hNDzmRd7gcDsKMtMPxduDBctsgW9FmXVYhT167Qh7X8AG46yhp5QEM",
  "key10": "zqhPdNLSZuSXPeCsZXFyWwACSJvG3EjYs8WmQ6Ls11oCT8Crt4S1o2GdJ97rjAxEmSQrwLEZXVULDYWHwitxVu1",
  "key11": "TgMXanchXh5NMvSJJ9o588MTp659CoTjq3Nd5eFREn8C4guFRrvhoX2N6qZLMJByuV7CyC1SffwxkZ6wU6yWSEn",
  "key12": "hHC2z7d5yHj6ToBPgyYF1zCLdCUPyLEBEQvDqj1jf2E9TrCdTfCX2cq2XJVRwP2FHXuJQ2iR4YyWA9g3bMNzzfT",
  "key13": "7w32pf6xUM2GFgTT5qFEHYPijABtXpwocCzSaRv93Wx3Vrz1JzTyA4x6hoXWWzt19haFe9mZsxT5gWYH7y4yrCe",
  "key14": "4APM8cZ4nC2FAuTBmNpekGQ56xErU46uZRW1E6FCsRmG36Pcnp35cMez9F4NC7dEscbszWtxoSGpdgPUZAB5hCSz",
  "key15": "rNZrr7Ccnv4hAmmmc36mCKwwzsA3Z8w5wE15BWqTboUMPctutYf9EuvjWWr64zUD85oeZQ9ZKPemW4wQyrZ5svE",
  "key16": "2HfGHqvCpQjqSmNVxRGhsVV5dJ6uQcWQqX1y28AdPm3B6zFmvrcGnxcd7P4sZFBqCaa9EQPztT1Vet1QCzZV2BDN",
  "key17": "47dFDTonfCeDxWXfTcAW8cmqWdUnAsNReHU5Mb56GM6mkTqk3k5YBK7Eqj8Lbp1HpCyUXBd7sdA31rUARq2Ck189",
  "key18": "23zDsswD8gftFpSgXCTUCPUnrMuMSmmMuhpkpfFJy4V3MAPZiMJxFnfQ8wkudASc2ouJvK6mypB9zrJVjAxerbX2",
  "key19": "2ZqLvUeT8WUwrUeSXxnZyA6RDFp6DoxuSrPh6BcQsmGouSjqX7Ym8x337mpLp9MstCzFEBuTntxw2tSg5TB4YAbm",
  "key20": "hR2wgae8Hc5ipj3heLC1XszpMHtWBpG7DazW3PQh8FXqnTz2giJzoiCusvmZwu9nnu8vN8ynMv3XkRiem7JCibq",
  "key21": "4xBYQpYyiG35VgnYt8hvtszXuank6kwTL1FwJXEHBB5hDB3p7hLV162KUdTCB1PBp76nVHJoifaEv7UNCKZkum3F",
  "key22": "5krpHHHsxQfdh2NfB57S52cCHFEehHyDUKeWBYW2GDvQ1HLbW9X1bE1jL1bYM5ZmLXJuWi2nCSSCmk13u17Cfd82",
  "key23": "5ezmnKoY5RpdMZYetKUYTMWr7obCZ6XbdjoSvtYamucJMHGW3MEfTNxyQx1c4ik4pwmQdHkkPBnHvsqFLMNEZfM6",
  "key24": "vycAzaRYs1XdrNeouHx3gEPQCAfdr3EKcBosA1rj5Hed4qEWxmwPazdMBn8LUyEFtSbL4Ti8NmwYbi4QJSXf3c3",
  "key25": "vgyk3BSrD1xheDMgWFK73xkCW1gAfbA3MTUvjfmy9uRvaQJmAgGioTAhqzWEZJXKtBHZNhB4Fq7mZQzVuJgBmJa",
  "key26": "2kWcRCF7VZh2Dkd9aJN2pF32RjQFL2PV8yup964E2ax9rcL1iT1JEb6EZz3xgf41cxm95tUt7vdm8tBtgBbFkPih",
  "key27": "32EuvqMakpnzHJpjnBN4VViStF5pjFcMUaUTte4sH7j8DKxk9k4SfJR5wx63Hq9N4hx9JiRRVcZgxrKPB3e6HFBF",
  "key28": "61bQVyqQEsAhbdoLfsZAgSjAF8AZMk9y6hWX4P6eMDpxzTUYGofpjWuAcnUVzqWXvdBrmTwR7Dd6vU4ev6mFrgTH",
  "key29": "4xAF291Q9wXchJ4i7WR66yGW18poGC4ccPCX6oc5uK6Ba1hCHyfSNEgqSszzTvHWYDYtMhi8xWxGPHa25SFhZvpP",
  "key30": "48QwHHzjDVb16AaGMcqUetnNVjziJmXzhnmepeqheLVQmuGJ6pf92R2pTjoihZVsXC1x7zLUDQMdiScPPUNnsJQX",
  "key31": "5mF2p5nc82KrqxTDZutjKtEC9G3vKDbcNxqwv1RC5hH3tvJjZCqKZsYpvZvjEjJVxEnzgr1vvPzoWWUPmsTeGWb7",
  "key32": "5vwvd2bKcL7fM8BKmK8Zt3xqpAGbJJRj85ZMRqYk3fiXfuMdXhaJJ1KeGe1wnXoiMB5xciDVeqd3cRey8FGwVQ1T",
  "key33": "2zWQT8AxasJtwU7FUGVtRcJYNC3pB6d5a52xT1WhAtSgQ5JeXxxA14zyGwYg91Wybd6iAF4Qs266JVxm6ZedbyBh",
  "key34": "2rYEzXd9Rp51WajC9WRP5XWpshsfphRG9riieP3USvqUVMfjSAWTTZANLpkzYdVEKF7gcWhJRYAwUvwujFmtY9H6",
  "key35": "3SkqX1ibVaSTLZYz45NA6ivc9FJmjkyqzLC84FotkPmojQHYU9edPX34mHGHokuEZnDjmcZKzucjybTfT3JwX5kn",
  "key36": "5skw8EELHJp8dvaiAkhKAdrjbXrccAPQtiQsofbNwM79oBHZDCGKsW37WwtjnQ6R7DBvXZcQNYC3sUBdKciXQzgD",
  "key37": "3ihJB8auXnwd34mHiBhp7b1xzAGGxEYiubVYRLb8bY2CDnzmcxMv7kGoJx5u5nfnXr5F3PBi2j53oGCWXHeE4pPq",
  "key38": "44VtKH7dyQyorp3rmyX915k1DbLrAqMfKVbHSyTsD6V8zr7YLGErzjCwsfffBsm4bXoWFw2StaeNgukpPhCj32EE",
  "key39": "2SM5Phd2nD6GE2JJeXh71E3XzsYKms3jJ2xhzZghtwndE6quSGbN8zyG7v5cJaFs35tskpZLWce8q8BtYogUhpRx",
  "key40": "mwcR8cZDukgQnryjjGv6mbbHSixhUMDzMPjLjejSZSwtnpdy6d4G8fB2MnRBqkL2LqDP7NZpNfa3dEFPdQxhm12"
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
