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
    "S8NrLjxs6zQZeCBEzYsX44SXZsac8gWTCFGPRNzUWZuafzKVh661bs7Dh2KiEnZ7ouW4ZV5PigJL1SUL9GvTBcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BpfFcxBVc5BGbzyczqJqtXs4uoEUoNBkg7jUFUtV68Hb8jp32dLZNoWjotJDAPqcX4cG1n68L4LTydmdTEDFTjB",
  "key1": "5xDYrkMh6RFG2qHM1wv7Y6PwWb45khrXriae7UhanpPfXDnLN5GMQsm1XEeJTNn5G9jMheaa8othecX6oWCQNV9b",
  "key2": "34hAYB8NgRzbV6wySmBf9Ei8VFpSHGQTUbth14798fHim9TkL32XvmKbT87WJXebfnAD3QNfHxxe8Q4o81nZMZCG",
  "key3": "2ffMuFQguDFz8YdfMvs6oqSWGsLCkBrUuA6oXAesXdvhCrVu92S6zhmqQ4P5NAA1SKwKTERHQ5YSrqwxFbxrFoZb",
  "key4": "3bPgw5yAfzcTCQGNJxz9UDtmgqns3hszsR6f5pQWhfzfNARxS54Qdm2B6kzf9CDrYtPAdZfxVxihKPTG6DKYKVtz",
  "key5": "5zorxaG9JzptESWoH7e3EJEN23AdduYa9nEErr2zq6SFEPPEd9aFUSjmgAS96Zv3x6c7SHCrbWuDf8sak6RFqDeK",
  "key6": "2zgdNWdTNaXGX5jAHjYwZebYxLtRR9P5tUzmmKFmEknKyCRRt8NqxUvZvyv6DprUWASUh89UNbpBfRwvhFycx1AR",
  "key7": "doqPxKTEHfFrQZS24L963uXnfQTrvpNCku2TXV4evNewS2r4TTReeZFz7uuDRo8DEHGQW1Vz6Htv5EXMS6Km8Aa",
  "key8": "3K12TRJBM7h4dYVFSbxWieNP4MFohETm4hGfyGSfWdtVRJuGQ9Y6MdtMFoW4a5cBT8YpTo8ktd288WmLniMJfd6w",
  "key9": "nZ6GBFs4JhHqhrYZYpsJaj73nDVm5P7wrZyz5ezAKhnm9ECz7WqipCDdg4Fb7VkAaPKL6RCWuGEbtx51LFrYcu9",
  "key10": "2f6X8NVorwRGcZ5gaAFPdW64QYPtr9EPAVcjGQQ9m126R32H9gYtn12YPkBbrh5pbRgRiCWR1vzr6kdDHEqqkrjp",
  "key11": "5rNXV5bPRdibZCwW6zKJdATji5MZd1THRzXmyeB9hGo4GpCvjW126cEKb7Hv7tvBBRkSzKLZRS85fe3aeAZMm31U",
  "key12": "5XvbFuq2sSHRNJVQVYL2x1fPFHeSPhsqpBrQP3DiDX8Z5tqSoTxCromSJ6FuJZ5CKBQwMrLmXJqUEV4ZKNMTmhZB",
  "key13": "hLyHfFvvMzf1YRRppoa718YQu2EMM8zLRCAZxDHRYW2AMCtkqRiAnhvaqPh86LFTWrpEzPhuHqwrTidEHs8mUqC",
  "key14": "SNDiNNmLtQwsxhAAaRdRDKxQJcuac7vemE2a6q3jyd5MMveyLKbHiqQnipHFXQWs55rAHAjcF7TUePHW2xkjx5U",
  "key15": "4QWBRiju7WmFsHukdqAoaPg9ekksmtE8cMXh3BbhYm1qgjjSnWHTpyNLP8DMAxfubmTrjUZsyUgFkp3he8RgoLjT",
  "key16": "2q2jJ2LN6PDvvAdPHxg4n1u7TjcNLzLWDNba4Z56Fr4dijdowCo9ZiNzkEGa1GTTAXiFAp3GsTdz27Lakadm7Xqc",
  "key17": "HTGtC4MMMgfgsMxYggutKZ1xRqB4qgGXSzR1q3hDCydgnLrxUdMuRijPwMsWrQNe15vAYCu16KeM38aZnuigB8H",
  "key18": "33xbyz3M9KT9WqtQDoukJZaqVMT6bAijrNNxP3nSg5dox2VpzRqPXRAYwpfH1n3TYfvCWMoyRAkChYeB4Jx7EUX4",
  "key19": "2JWcguko2EaWfQdKRZzb12A4sNaou6xY9U2is2FaAsjuLamZno4RhtYWJX1C1MSYUcp2YMGk2xhonpfRQyFVBKYu",
  "key20": "2178kFxd8Y25oqHT5CfoCM2XT4EsHgesaPpkBxtN8T5kVye92J5MNRnPgvy5vAphqx8GFpgqPm9veevoPYueUmG9",
  "key21": "5yEfApeXTnrL5yMBhiX2abJtB7t6Z5gE47w2so7eJsK4tiYUXgdmmeMW1EaNZzz8oWTEA6P1VpBjwncuMGnoxgDC",
  "key22": "3mEaqoTYg6dBbaZsLZ7PdctqfEdLLwEdPt4JpUEfpceGCacZrXC9oCrjfrvo2o5fXbBpXEQW1Sq5LbPGxiZKi1DY",
  "key23": "4GS23DvvcA5YQZcHX4AwsWebxbocJ9MdVtXnay5VnaW18E4iajDpDp2KcC2Vxzj8Pe5ZqpfHuun7B1BDN2mkXuvL",
  "key24": "2BCPBhcKEoMcU2UgXSs5K6WojdkSmk5u4a2NKjsmcQU3LeoMzVU96q8H9Dk5ZFhBn9c1zoXWPyYVH5dcC4cu9Vt8",
  "key25": "2ArhZgUM1jMRwUKwbGUBB4M2j9N8d2BuyXHf7t8jYvAmXx6XHJLFd4zU2bNYsCgVAACC7sLkUUzNxjGJgGbsawHA",
  "key26": "3jtU27sbaZLmUQyHchHhy2dLppqpo4BK4e2m4QkHuWQVK5N4YCL6s86gbnEcf5xCrnoehdn9ridGmSkUmaCxL4Av",
  "key27": "2donZgNhRi6rxU7Wd6w7EiV1j6NhCQrHt5Kq2RjC5dWfos1eCugWHNi1R8BC6wQf2nCyLTHiCUvG472k963qp4Go",
  "key28": "3RAMhjzbi4MotjkHaL2XMBEiGoXijzKjxjdcnuAwPv93TpLLv3muqSGi68nsqftN9dFj923KjpdSbNfrsX4DTT1T",
  "key29": "48aV6ctNgSPcZswFEd1dyhC8ww4AzAe7bX8yroCm6EFhiaAwtQdurbSuWGhNErqZSbnY394ETGYLBFKvqH1xYxdL",
  "key30": "3dPp8Kq8AJPCDSS91gLcT2D42ecJADj7vfjGYseRaPkPgeBRf9FPS6FzueaQ2GnWHGL93EUSP64r9r1HqvbmDZRw"
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
