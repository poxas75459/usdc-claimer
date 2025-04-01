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
    "4VgUsuidzHfU7ydF6GoxacWcYHiXA1KgJavb4jyyVZMe6ukgKecvhPSt14tKsAYwAwqsP85WKcEYpmr7UMLQnJzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CBS4JgZjw9LzGQvs6bjUBrZmcQKpTE3WuP3dJWqMMtPVkMz9EWCeuqFWZRV9n1T2gfpHs57WfREDz7oGJxwWquC",
  "key1": "3eyUYWBCpYqJ3or5BeayTiZwRqUkPsGE2cA96SUdqyabv7gkrbzmhZrCWipFkURQNZ4Zx4rhd4rMedriZaxqUNAN",
  "key2": "56AkdbyS1HWneDguiiy8mXVHu7iGXrTXG5UAtCQNguzXphjwzqGpDunjHEKm5wnLnW4UH3bUTPXKGPPypBSZ7jc8",
  "key3": "5shfLy1shSqbabhXs7j9vsFApQM8WuVXCVNmtCeF7LuLqsX8csCEpED4gaMZ8i9yFUGRD2BPkaUXwuxnM9nXNVbi",
  "key4": "pFYPivggWDNpEDWAZVMZ8yY4rrngRpLpdHhQNaWEXQ31otWrjvQU7f1THpzSsMDbMCimRT5SW3gy7EbKwSXGaKq",
  "key5": "3Y5wEASqZNr1PQBj9fz7N9ctf98sCPvwWVtjFGQN55q1UpkeCN6KBXsNvsYDYN9Gqcme956NfWNVgc7HiSyMiKy4",
  "key6": "4SFVJdHtbZBKvvTLCXEZGPmm1pyGewDFqmkmZn68vu1WcavYf9huFV8ZFci3RavpnqDNZLYA6xZsC6mgcxwicCVL",
  "key7": "3Zj8Em2DPuLrUnjJfh4gzWnWzKt9tk8JYXLZM8VUJP6duxT8SR8unu3KVBvMgL8GAGocGFqTbGLTCeWDjMWJ5wb1",
  "key8": "22R1KsGEPjbdhsqrRnic986CRX67K4qy4DzBxhbPPkfdRJbXVwPPv6E7vN5MNU1QumgMgJCphwtEemi31TnNpMAL",
  "key9": "TWHFNivMGmbD8yhjyDJ52RDmQAkCqH9rBFiW8odCtzwtiggWXkMPS87irtRAJ5ZEALUDPdHuKHzMWe3i8Mp1NtF",
  "key10": "3cJkb6uTQpawebEmY9tGtyNmWxncCidKYFW3iRpuWu89c8Ga85qf2nMXAAL5RXxHxBJjxHPW9bYfLThuV8m4f8xp",
  "key11": "2d5zcdFGL3b2Jr1iAVYSa26fdSDx89W5oJ2infTqFxsfnwWifkvTn6KPbcA4oFC2W6UbofuHashKB8W9QrSxsCDd",
  "key12": "4WKy1qom1GYBHTwqTkfE79SnVB3Gu6jGT2cWa4HDZ8GhPGJDGRpfAUAD8YWfatP1dw7ub3jZSGUG18sU6hB7fKLF",
  "key13": "4Re1cd8eUVR1GHHaY84BN6L9BR6QzL9eTKv35Kqn91oZYEsBN4ppFgRydVG9Tpcv8dFce9cNnw17f7sxi3SxxPNV",
  "key14": "vWnaNjeDnLj9oRLLFv8Dbkc9ssT6yN9CTxJQuBEv8Q37GQ6bNzhGUBtVVeEyRD62ytbasETWwGkGjwpgULAuSd3",
  "key15": "fSWkottCLaNKKwXmjHsJzWd4LwbsLXgrRSH7NJFXK8xiD3Rs2vaDvKaQKN61d14rmdk6XFa8qc6zd2zJxKbbKW2",
  "key16": "3QmVQN98rVsSGaKJgtHrtcBBq1zyY5hwLJkg1PqigfYzzb7AjMbcWa4GCcwjbynDY6UrMD9HL1sE8sWfMxikqmmb",
  "key17": "CEfuvYWPYLgNBsabBW1CQijXtTptFD9pcWkkCxMNgA9B8DAEZzxEkjWVsyiTakYeEjduk6Ys55jWprAAGSRA5Qk",
  "key18": "59GBCptbF7k7UuvzPSdZURDXz6cpQywuKEpr7B8GtR2Bi7ovD3cdZ2oZqwUJx4cyKrptZzHUxnpH6paVKectCrri",
  "key19": "5rbmzC8KacNXk52N6aZjyrRtxzc62xacQm6KrPbPr3VH7n8sTCPN4Sp5XxPpEhbfWwbgxzxeKcPNHrM27nFGqg2A",
  "key20": "2zaTdTwfzRPVUKyhHWq8foVbfEg1Qto8agth925XsVudGojeQhg7Ki71VCvTgPatii29oyg2TVMBwJQWJWocQ5J8",
  "key21": "5gGBkTAT1WHok3NBnukDhYMWs2B3qL8w9f1LL1tWKxrUTUSbtXoJBr38vk69LSJozc2tohCQLoteYqDiUA2k3fRw",
  "key22": "2B2v1JmBeFhr1GybSaqXCgLd5HNeSafGTN8MzCr4A6pUsdcz5ZHaeZtiD38oFKeJgxBr1n89c7Sxtxix3r4QVC1e",
  "key23": "2uq2SDB4SwYmrBBU2iRH9JtekggLVHEfziZrJEfAXj9wEjSF2CZVjk96WR8jjbdrQGygFZXC9txL6XsEyQauk4g8",
  "key24": "2M4VxiC1fNLF7beqzWqivW56af2GmipC8AFCfGMfcwVKwDKJJZT3SBUhjyGpSP3nrLQcm4GfU7y8jgUkpv2hrgaN",
  "key25": "2GsD3nhYgJnZMj8pupsfjLxLccgwaX4vN7MEN8kibGuncd33GrD96whccALJijEWB5ginc8Xw3Z7A16i4B3ECG93",
  "key26": "4xvJy8sP1SueG1CGPaVo5syFTceAcYS6GKFtkeVbFg4StWfthCkvmRc5DeBMojcSsMrzyoQ9oNEmeh811xbKdt65",
  "key27": "4WpY2LwNSPZDyMbBCkeU2s2eArzZXVJrWb796i6s443WukUFJbPWVGAEwHbwPeGEEdKyQXVSiMGoHYYW1eLUKmtv",
  "key28": "3pMGAbMiFvUKYV9H1Qj5yjvwEBT9Xa7v2sjRXgQqdufPSfKHMyUhJWXzZ9jogjw7qBhP1SPvx3Hn3AWhgB5DyVba",
  "key29": "3oBnm3DorYMNr9shCoB9ZfPixWCyhuqHHd1eRjArPFPVXeHwcB3LexGGpEcpRmXX5damsdoupDcANYLZ6ndN6dBE",
  "key30": "3Z39F9eMfRKyjqQD7XD8GNxnu8xW6JvpSekFVxga4WPXadj57qeHignovEsZCuuPZdWAE8xuuagnGRPFce749faf",
  "key31": "5rBBxr6rmNjHvdw5SJopDnpvHmefAWXbUSwEhXk9dHb3X3tszfD1mbiKMtSzNjxcexnFeacBepJ9tjfQBcmtPrh5",
  "key32": "36pYeTYvqp6cM6s9ofHEQz6beagGqDV6PhjPWtmkZaSeg9B1evvVjBY3rUnus27cXcSZV1AnGABHbKRPEh1dekTk",
  "key33": "31SyFASx3Qny9KfroNA5Ruuio2NWSfKn1MxUkGzxd2YYfEmvMXXyirYqsiAAEDv1MsFobZsxP3TjU4BTt8nC7Qpa",
  "key34": "4PMGmW45BacuPtCENZ3uS8wSFnAmiiQqWiBpUKMVHVsEhVZTxZeaFtWBMQJ2oa9bZvPDJi8J2dBhEzwg9EGeNpn7",
  "key35": "5GGpHXAqwPrp6Ed1xYyknP1Y7vHVn6H3JTkSq8VERcxY75wCfr4BN1gr8nNoMVhbgALxBzfQ4vR1Kd6Noq7rn4hp",
  "key36": "QJBSKweZCejmXqtxzZka6u9SBjXkYw2YcTBKHARKFh4Vx5vTC2SmjVM8gsNK3zhRfqtZeNFaHLbXjmQXVRzuEMN",
  "key37": "3HYyRgw2XzHFSK1AgT8THUW271C3wVJmKjw86ru5SY6Dqjj363mqcagRFcRwuyZurfay9WffdSCNZydmh5rdrDv3",
  "key38": "3QPJBPo1uS9S2W8JiiJ2uz5xvucYphZPHcGzp53t6NEWv8qWyhnmJwADm9ZLkTKx6UAZrwDGbtcE7z8aPYwpBmBR",
  "key39": "2GkGaubY6moAJmoBrNDZMeH17fN5C1tKpppbhaJXujBiwWDzvT6qxUPmZgXqkK4qtuqA6aspET9w9ZYvpPsspD3d",
  "key40": "D6JSMgBUREhk53JzWHiT73f1PZuGQnCwsTY4iRiaXbUunoqvwpLEJPwf7U2WCvKDvz4S9iw6jdtA2nGKFyQPF44",
  "key41": "4RwUUn5PuWUu4aMpvD9krAAyfaNTDCpFPKAvHUsVXFgk5uXBj63S57ZNE4oWjJBHr4PmrSzsPAc6dMbjVUS2njTw",
  "key42": "48nkb2LDQYyvY54a5xA4JYvkQCCeWDbPtAKzbMFYbpAof2tyGTsw549tYa5p3ehSoW6su1fkcaLs5qkcbkyQWbX8",
  "key43": "3gpceU8DdUAdAmTB8WsMHpMLGBgWHd6NVuerGCwcafeeZ2hQFZ9CJao9LxXbPxF6TLJ8LCN8SB89CnBpKQHbKFVf",
  "key44": "4UfL9kJtnuHyYGvSnzAU87EjQBCJswijUL9ZKf4Y1eEiw8QyrbFgLnQvx8zmBXnQcAzoF9ns81XQsT4UaxTxpHhA",
  "key45": "3VmG8oBYq2hAZdV9WBLNcVvKLkbokMipZmDMeQzxvKWXiHndoAjJPDV4qkEqG3dMbBbfd32t9ek8Rz4A94BpxR4W",
  "key46": "5yvxXBxdy5Dx1pxfLvJr5C7sy6m7JUyhLXeCLvmpwfV6yM6RMmP7J8nJGKn3d33wWsV2x4CwbMgyj4pXGXX8E4tV",
  "key47": "3CcHSBHE3AqZyxbWx9rzWxS2uRy4mTEiH2vL4xxbJxdU95sq6zSNG5Ne5EBaCDY6jhYQfS4Er2fGePey6wztp6YZ",
  "key48": "qaT2pRgwNSdBGFGNbqcNg49WvwhszND9US3EDKuNDwhZnxzwXZdHwfs5a8CTyww1hUjn6mdw6HC5YEm3McLJave",
  "key49": "64J9ihUfusvkEdWofVtxJqM7gtfD6PZrmtofb2t3vprvQurSH9jfn8ZzvY88GePYddMKr6yQpirJsgJTUeF4zsYf"
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
