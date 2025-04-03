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
    "2fHFFAVNDCBwRdBzP9oGzEMsZcJPpWFyvwFaAdd3R1gRrDEyrmQVbyzqRaEzY4HjugD9o6yjVHMpn3xfENyBWcZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qYbai9bXJPF5NfnkgSBYf8jU2VhiyDRayctw7mHaGSm2v8KFetuT1sqeWAsHyLWToCvwtGgsK6XF4hdo88nXsrf",
  "key1": "3S7AWJsMMPEUDG9LPKXKaGw5TMrS8K3D17E22Q77GNUwkyyCCA7JDtKxHQKbmhVGj6NbSQpt52YJKzjfT6p4264e",
  "key2": "5e1xWJvw49caaoKVpeSmKTjW5wvcQTQgFasxgPDRbdMrQjRUyqRUd3yvoH3PVjstYNQgVKirW1oHbPmzZh5vsHtR",
  "key3": "5MM2oC7rFm6iNhmf7THQNZzemXpWk2S5K4joG7yJBYFG1xE7pxBjXXXbbgP9FWfy581uVpMHrSjtDt5yDB9dmi3T",
  "key4": "3u85eoiznFyRe9FVHmnbBwKNmHAFDAcwCgJb8RAZX4AJ9DEb3M6xzugdKPv2YFq8Wy6LrBSQBB61ATe8GeJRvHen",
  "key5": "2dQBC7kccm6wVzWEoayz9eqHqoE89uURTqrJNzVfsGmParPvoi8EjLSTN98mFnwyVTGD6jQVav9VRD5xf73bmLDe",
  "key6": "52d9u4uDwcVtSGzgMBQKVP4mLutfgudpQYL2U1eiazVAmX18nYUysALHosxxkUyXCLXjK8ChsQ5xmpXrKHc76Coh",
  "key7": "2ZSakr6er7fvvKhEkFYHkYBorD8SxGVUT5GQ1skd5seedUejxepJijwWUneNJG2yFbK4CBM63rELp8VrbcimFVSz",
  "key8": "rGk9baFGmaAkR8gjVu1iSdYSanMUWnCbaPuZf9uW7wSMSqQAt2KryVHUj5hHcpeLnSZyWHjPtEfTBrjpX9crEz8",
  "key9": "5BvX7DKED4SMqb4xWmzNqGhJPmgnjkG27GFyFyPyHLywwVhNefgvoZPgByFSdSFxuC8hePMRG1iP7pryqv4s1f8r",
  "key10": "3c8iGCN9yFsqtVVQhW5Qkxd6EBeagXrJvbCvYQ3SXpFKSDJb48uUWFQbhYF3u5RyZFUCP8qmorrpgK1nz7cfCVg5",
  "key11": "5mUV1FqeBRi6MTcDynuVsntZwZAtL8LZpnS5kTkeuFujaUWCZRsghNMBgzMvbB85novFpp4Z6MsMiF5yq5nkAX6G",
  "key12": "4sxuEWUATkMJ67Y5fQzo3pWqL4N4pTebGxsCzrb9RPk4SyFqYsPWuTyJ7nyh94QQbynn5EdLuL8atK2CsEiAP3GT",
  "key13": "5K2TUSbAbEj1qjDzwZykrXTwGEpKpTXym341oVQGRyEfsDooTzGSst7yHrmTN9Mgu95tXFDudRhY8cQvMyakqm3y",
  "key14": "3nK5fLGKHfHfuErufeRrFftHpS1ptU72k8Ge1mNYdvkLHiP75z7vPoCJee5VYZv4K1G2Tv7hEGvo9Mm2K3JxDHF8",
  "key15": "4jQabAD24roERkrbzpMNCgMkM59tyFf122C6jAYNZSm49dZVVELnBw5AR5VJcPm78FSXCvUnYGTeUX8cGx63AMCV",
  "key16": "5ou5RxghtE2gvnN34g73omTeaLig5FmuHqHjFa7wThtyVmb2iKRcei4D9WzjKKGqoR8YuYLNHTewqaXFr5KK5J7Q",
  "key17": "2gxLvJc8EkrZWCoZ1ijDzHH1uj58WSnqNcJQSbL95SbS3Ncrzvtdx7RtDGpodBri71b1AAXr5NhB9nKCA7MdATzb",
  "key18": "4kv1LAcDXby6Mf9amZ5JPtDuhHDiQHadQJvX2mWiTGa7hTiPE8c88aR3VMTHw3pago1LmdD6hkYxX6ExJyondWPz",
  "key19": "nNcKCcDwUmghNMnAdw6AjL8wkJX8YbBBvfvG87XDRxeD1zsz9q23nTmu6nsq2LrRqEm5rhzxzdV1yKH3zFxRn1i",
  "key20": "542sksZj5KYp98CWUnHjRecxTjKhupT5sBNUriaXBn7U1fVwCcRPe8LY4riuNvabVC98XaaRxEteELzTqaX6krse",
  "key21": "5SNX5zZYHzYa6o459T9pgzDaxCPQqtVY5xSKXfiqFThersDGG68UMtSQQQjhmTYMFXfpsWuXKB9rGEsRAfDBUmqb",
  "key22": "bZPNeDUTF3817HUtxNv4vKAUEpEQjcyWk89LxgwfgQC5x2LUzCi1Tx9kQe8oBrYV3igaS9UacAQBxyZ8wUyEexL",
  "key23": "4W7epgXgohTjzP3fkGhKe3aUQVMfgbaVkA2huXH97mR3x7iJU1ZJWCjMRKoYKmeUCssTWLTZ2SXb2GaywoKwVhgh",
  "key24": "329MTNMEw3fwy9ChjkNWCe6gzZeh4UEGXusUYnNrc6W1Zh5C1GQk3fnvCLJGMZrZ7wCgg4wN2HHMUibZReh9GCxz",
  "key25": "46fPuwbQHBQL4uhMkaaCWNaq7KSFKuH7s7tVbGFXmc4XPQPfbshXczM2ExpGXXP2RGFQ3Nj1ZTUVmvua32KzgDER",
  "key26": "4cY2km8iwdXEFP3aXtVkTAS1Zm9NsDqLFfFpYQonsLQoDc5iy6PmH2tX21MhDrcQUVdeWNLoPivvgokdqUbFpDyH",
  "key27": "3i31nQKHnfBaHHBgXBRmcD5gb65xBBaVEkKdLfPy4e3uKoFjH3ZBKwmGNG3GPjTYTpgfdk8NCfXaTyYcd2yAD2zs",
  "key28": "668VBPAEiXxnmeqs35EM97kZqE8QvPqEdSZU3a6S3bW3rQW5dwtAYnAEnnhz41AZ1LxLTwFQFM8SRCjz7WeJnykF",
  "key29": "3R3PMG8d4M3SFSvxAor1J67NYDUUnsKKujUvGW7RQmLLM8RXNQBEfXseuYr9GNBqpBDbMeDwtPg69MQ2eEjGMTWF",
  "key30": "5MeFdgRvFL25pB319xjsat9rjniwiWBpqZEhT6ZpzQtsQbqm5C1BaLQcdF1QbVxXpQ3b9b29CZKHzfdtaeRMyXmS",
  "key31": "5UJc6ReZWXz7uSsp8DN4kRPEbp1bPctASHJ8HmzPhJtZGRTEtczhz1u1G6yzVqswqoxtPSEMWu1NdEsAKPgPM3VD"
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
