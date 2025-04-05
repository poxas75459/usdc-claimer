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
    "52F5oSbBAMm8yTfXmb1ybiQPmRijwovcRawP7BKJ4Sr9H2LSQUVrMfD5dnZLD8aArcBH9bJX3oHqqwE4v78513qG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TYqQJAqkmHYNMfY9AwVHnQYcNZwU83nQUxskA53PezcnfFmXzBenSALNfRC8LowveN2poBppg4s1t3gRCuZYsaW",
  "key1": "N929VfLs8iMZR1rb1AB6DPDV4wiLD426gLKfUfB61Wbq6ZKwZaLh38WGd7JnrXBUU2eu3MrWpcBrsKjdmfP1buk",
  "key2": "L5vBa2KUBh5UkCSiQ6iKauhZxCn6uwXfZCZEoX7TAmhkmZ9zjcdY8fqUKZSiNoa2uF9kaNoPuWBMZDNBYeFJ1Nj",
  "key3": "4LQhMiiEhbqe6z4S8pQpvQt95GiU3YK5xS1mGwxNEBrZJqpySazrayppBtvCS1DBYJmNcEucvohBLqBWk8g4b5sW",
  "key4": "3Ug5DkfbexLoQGML65z8rDxmjWEJt37UX4Jb9H6a1ZpFQBv1EPVf4szMc1XHVzS2RsqUWMqRSHvi5tU3LgUgRVUa",
  "key5": "2Vvx3aQFNRbEwBgPpVvvUN8VaVoyLivu8vVcS3qaE2BrQFn5Tr61nrTLYN5dCDg64eUGYXD4eP7U6JokcTvBhCgS",
  "key6": "52b8MuHcTzasfc2C2bBu46KGQdQnpGijCr8XNH9SveRVHnoVb84JrSvUfWZVFak1FDRvdHGFUWxZGKxSDcFrU4R9",
  "key7": "RiQCPsXqkVzHqTx1US8F3etU2aRcfhtyyApurNkasJyxxT3uBT476CQTQYQgUf2UoNoPBfa96fZr3bpTkpxJtNE",
  "key8": "2AvWRWUWfSTqT7UFgG7YC5FWZhKyJUPPyTiCVmaxwyqqujpWAmn6HH74NzCm7KYsyHB891Qa6MmeQF8ZVqWvSFp",
  "key9": "3NtMJB35PERodZ3n6xD3rT2UEthyNVaKNRWZDHKYDKmpEXP18uAmGYvQ6YrdFNoBdBxc12LeMdggvhPcvUZUadk4",
  "key10": "2gtnxgBKQa18J3dqaebath8XBAckKLZhQ8xWTFsiWuCNvNPpD6nw4gAGBqqgpCDUwapaqm5dMqk4pGcXwUh8yFaK",
  "key11": "5EqvzLqHipuYM5BYEEbwZBq5D4DaJDvRrcwSqabCDRkEwJq9ocZ7qA5HRHPgMGcrFV8fdoTeTmPraMGgTYMWMRwD",
  "key12": "4qTBh1jc2z8sqFTf89Q4fAYQDQdyFQ2MUbRyoxc2rwjKEidvHm747BCgsVKFVWhrcYa5dej4dBSPUZtySUAXsQGa",
  "key13": "39Nd4ChCtiyLHiHsuPs5NXYqPzx9tMYJjrLbqFnFai5gnf2iCHVtXbjhU4mRtf3EVmMRS3sG2nGbBaMNEynf5Dtd",
  "key14": "8DjZ4Y1Ca1DRZGAnLMGUQZ6TyGBLTVb7RRMhGH4jzCkPgs6CStvCu14F9HvXrR2B3vrTG3M3S1ke3uv7xgSAEFQ",
  "key15": "2NVkWxH3Fh9zEK93XaLmoeW4zpq8GwH6wyfLqpMQo2DAtKiFsyM5MqSFw8gnetdnC964DDeLChakaTWqG8W4Sahf",
  "key16": "qG7xYgBtfJowLf1tGsRd1Q4iSM9nFCdzGbqYm3SSVBEfpFReG55VfM7oPfAEvJNvapssi7opxnhcEBEP2XDwUCm",
  "key17": "2MNcP9fHcSQCvq4DNtnDAhBDJp7vQznq3oMFCbQzxTJds1rMFiiYEkwrD8w3h1ppm3PwiWnMhegRUbhXBijAFwP2",
  "key18": "4hpQ4s727dza6f4qJTqRiqypRCM2aUHXC9gYEL2TYBTbcYM3MVfmDefg7DWMLVSKVJwmVZmS5thqZ8tjvpFQ7BCo",
  "key19": "hLCaz6oQQzaekguxPAJhtJUWaZ4J27hBJtzdomHkwVnGfxf6jrDNbgTAADdjUv1cikoiwvMvHpWSUCZdiMGBoAx",
  "key20": "5CqFH3H4UKdyyBNiA1Lmvpvs9UcSh8j3utRFDDjGHRRRbXNmbEm7SN3eTKANDXzXmMx3ahoytkyhJam3Jtu5REhK",
  "key21": "4SkLNSS4QhQftwwe8nvWoFacmjeQhTpDsTMywisUeT5r3Dec1tMDj5fSWhxRHdiiPVAhER1azUsnicdtmnXph92Q",
  "key22": "3iAt7LZg2qN57FijUG49naLP4U5px4pzmJoDzimmBw4hT5Lu2G6KzTNfEHePAQpDqtCNqsHow1XKGsn6AKCMZ4sN",
  "key23": "4fz3z8gm8fnH36LzxVRFsJdhAQDhMGDfrxeAL9NYUBhm3uqAcphoJNhCdp3oYE1pUs1rBFVgrCUdKX1vR3YF35wy",
  "key24": "5aMPXou1xaAeq3ZJ7PMpg35bQLFN5QoMahMV386EvfgSnVAt8B4ocMZzRniJb8t6GZqhy3BU7BPwRyjLK34t814C",
  "key25": "32FyTzXUkxUZ9jJ2MyiFnwfMKcZrrzHs6LdN67w5sXbjgf3GjEvXn54RfFuzpfEgJViuZA9ubnWbfAyDMZLSX2d1",
  "key26": "4pMkHHa8tt4Cz7xw3wbQLNYemuKpRJU2zWDu53Yw28FMCQ5YWBhfbEZ8icvx4dw5JFu7Gkj4RxgcQXMoeDwevc9W",
  "key27": "5WmKyVczzJX8TSUs1ufR9cDH9xrnKNwoJ7BiBWg8vRRWzZuw9UT9GdjZirNe8zqsNnNLTBGUTQEB5N9wJnL1xgWJ",
  "key28": "4ULHqeXUgerrUCGdbDQ7cNFqY7PSCuuJMdghm8BgoTt3qRFTqkKbPzvdivsejkiyfPXmUoE9u6QhKTe5n4N4pkWt",
  "key29": "3ExThc3pEpaqspda9JdgcCouiCAE3VfGByJeePMwjECdGkAStDFKatxmBFiXuERv2bk8uqTJgRotu5swZZ5g2kiV",
  "key30": "42yB23Y1oKDVctjrm6QxGME1N2qyq72HNaVDn8pTkY8ZtZcPH1iyEuuvZViQPtqb1yG2Av92XErrZLJ4ZCVWgRxG",
  "key31": "2NMCD23zou59oyiFYJBiHFuZsnat7z6AzsGQbt1yA4ABwSdkT7t3bgKmdSuaB17wcVzcDWYKehBwKKmGGup4VY24",
  "key32": "3VJcrMzLpNBreYJ3Y8v6FKatYEyCtqV3Vx3p2KwVbUigqDBvGNx4nnNW223mfgGFMBoJG8cBQ35eTFAmdzXq5pp",
  "key33": "45SdPNN2im2kSSqcSaVNuuQHfmXqUcVwSFVFa3cvHB8X9KhULnpY9F7rZZ5dHC3HJrzrDXsKmYiJ9np9ufnRer4b",
  "key34": "3bPhNbxL9XZKAroeyMBUacA8NG4jDikgz8MUDQxUSAb1SeRRpnyhVjR8dPcwFXKQtxXxcF7NH4cchreTjhVHSMyj",
  "key35": "6vLawaTacug1Vs8dGCRXaEBTGYWD14kegcQSKQU2siWSzZi9tQxXVMq3ToCwGpuAL8LCQtD2c8oV9vFXyBQdTb4",
  "key36": "2sfd429evHboDAukZP6PiAVFyQPPjijvc5KVv8axBGDEdNeqcoiU4CadJbuRcBqwNcP1KHeucUYMTCQQAQ6im3KG",
  "key37": "4ja2s3tyj4PziuPni4hYADp13KfqBHnzwYmRAWT76ZN2oStuLPbDs5dTyyFvAryYRPwAymAj4fm6DJ8BMC5VCTHQ",
  "key38": "1u3VZHJuDCXivG8L5HxDmXScn4EBKxk5hQUKP4gy23XN8jRyeMmuorgc73hVwHWoFHu5XexSbfxtrcfEPMgKvgf",
  "key39": "6232nKFWtspPyyLEAKGfL1Y7T9KPwsjbcAJvE5xZgrSCyBSGmWoae5efkqTdmxgFUBRD85WCU2bE8P7qUAkoCRod",
  "key40": "oD6C5eytUnxjqaY6BTdk5RCP9ZNm78FNTSfFQLEj2LTCB9iMgUkFRUAkBiNQY58DDGj4UZLckq4zBmbsdPEqaBt",
  "key41": "5wUgx6mvNFT6tna8HcYbo7XmHxPrKiJ5kwsPrM7wkz1jtC33wQiRtq3aCXnRkeqLJZrceCkFCrjuuZGUgdAeBt6i",
  "key42": "2qePeggjaomHbPZZtGWymV4UsEWaJjXxzuxA6wphG3ebq9U2tL33bkyMHCWiqaJ1W8GuGYSwqMKMyuVbiXf5NeXo",
  "key43": "5AzpUSGHwU1rUK16ZgZ7UvZe7pQPNs6kjZQPVKLrEZGPGBjrdJAumz3vVJU4wcXBvpm3dNNsUhfu1t3XAq6DzUQo",
  "key44": "2VmA1DaV6v5YAajfhVborfhHeakitbi7KS27TZBaLkgYrxvKbAykXSG1HoEM3wiTc1KCeNViPdndViv8bfbZey5y",
  "key45": "3fH94bxhvEKNTv31TuHCTDjMEdpPFcMsXg8UicY3MRPpxuMhs8hjFcCzKFRDAxpHa9PDKizrLebLFqBXAhVBDtQZ",
  "key46": "6DEGzQ9HQAyJCjTmizWQZjU6VMhuPvKggkJwq8p6hC2StrmQhkkdNXTxKAMK5Two2pz4MXw9nxiJ3UxmM6FAiMt",
  "key47": "3kXQH7iCvSVSc7Sn6zrxPTjTKKtRJuig3KyNsLMQ6YKqd9UJqBSKcAhy5CCEBfTbFC1BW2EhXAJM5ZZqS9ap6v6x",
  "key48": "3TjSqmyfjwFdr5L6TpQAzmQFLkNrTwzP4iCY54Zg4uX4aVHyfpD79N89RMZjwjTTfUYWgPjPS9cxYFCdfiQU38p9"
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
