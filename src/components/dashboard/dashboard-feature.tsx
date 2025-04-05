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
    "22PNzxMib3sSyzp2BgaR5FUpmyBn57oXNm1oPciAzJPHo4hfKmovKDsELeuvKeqzd5xRYLi4t6ZBhGV6jfjuSWwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NNPof3f3gNLZnWnEwh4s1TGYrbdW8aMrDQUEpbbJ3nPnMEV7GGmHGb8NrFAAF4SY5mcAWTnNAAPvucJQ4WQREfr",
  "key1": "4QnMyAkib35sK4ZqSST3goedQMpAJQDPBo84U4s9BqDbMFTRw8kTmsGF8LYkfDd8zkAkzgmekMWAk3LLGMirm1Uv",
  "key2": "3US7y3Z3CVU1Nx7HACTurfSra95Uu5pcXSjp9KKcaEH2Gz26ApiwZX6FActJNPYZq9kGBXJ9t2YCcuhSEQaSHc6F",
  "key3": "Td7TQ1grPRyuxzJLmLDcMsHKz9QaW6v4qfs6copJLu6HpcfyFLxoT7Xo2WJ5SmxMy2tSjjb9GGFoNyW9ahXQmdd",
  "key4": "5CzYq3d6e7KwYSXYHGoc9shzchDMnqKzEqGxf1fLH7Y18cv5ADCKz3ZkZ9kWtddkHNnjNEtsiTWcYUH3ntkWgYxW",
  "key5": "5bSeMiYLnrjDRn6enJCvZ7ZFX96EAqmm75SYpvmZVVCSYT1U6r9Mq4hQz5kf9SqetuBn8w2g6zzxo32vJ6B6FuFe",
  "key6": "4qjLUc6uhYQ7JcTfoL662fFW6ttQseFEtqfPsvsPeVnm6EURMSDrQQYf5ANHLKGy6NfWER5e6PfyFt7VHmzaSwwM",
  "key7": "5JeBy58Ms9hic37Sv2t3UVgpRvHcUt57Ug2XbJmhEPg6tLJZ1qJbcPoAkGug17bZ89Pqxj4FKtp7dXUwBg8kboNi",
  "key8": "2cdrcD7WvR1r7buTfJsZBMWpRxvUPsuJASSXVmMsDgaSaPxvvmdY7jKwy4BjN4ehyf3UytTPHS9dKuJdjmAStJgT",
  "key9": "2qbM8XPugomm7x1b87jBkngh9WimXA2Vu4xAKqDyxJEMVrD3apv6PQFn9fZTdhAyZSwykufqjgR7KAj3z611d3yZ",
  "key10": "C4mXWe4HqJt4arkyd4MUptgbiTE7mzFg45ELasb9B1Y2Ckr1uSJzamH6EKjSuMh5BG3qBZHScrdCyEEUgKJm3tZ",
  "key11": "4wDugKc3N66P4cinN1giJigeG5ZogVJTN3dMySxU4jRU7uGRfBdRvYkq4xc4N3RZc4i4aBfUjLwhLMbxyKQJY6Qa",
  "key12": "yksM39keARDFXE6YGtiUNnCFpwvSrL6D1xvqf2SpaGgvPWuZeHByU8yBEjoeWUMtJA9Ch9urY46RPPPD3erbXaB",
  "key13": "3D9Jx9adKvHdEwKmzmJV5kPbC6KA6QXn3sktLChjzF2Ctpo53jSyHuxcYz3Q29aVryFsAL3UfSnGX4kvrs48oYVY",
  "key14": "2fhUsxHPS5KnZrJe66i3yxCYwibQBTLoKQ8jkhqG7oAyrZpBeP8PtrLGNiEj2fCkJMcjs5Y1YizKKQtt1bZ8gGkn",
  "key15": "JWvrgmhxDYcQsEADGyqaZHG28cZgnErSSpBrRL6L57Huxns7DCG1eDpjGruKE7zUURaC4jp9WcTYnVhC7WY2i8H",
  "key16": "rVHHgWsamYxzQpRCcz9iRqRNPMy4nApPTUtSFwiRx6w5jDinaTpi6KZfrBmsfvBYxopj1fKPrdY4e44PEjZtMQY",
  "key17": "2w8Z9wdvaMTUvPpLKuN6e3ZUT6PWTAUQsDZTUAPYFTBuxKLwRVNEaeLFMFwYMCmLVysRkDCooyWUdTdAiNtKaBzv",
  "key18": "2sgx2HDBVZPcEmZ832Bdxkcf9kAUL1T22BiwfnHD1CbK1HveYGMCuBtQbFYBDAp8WASeLePsAMUKKSuLg9MPBRqC",
  "key19": "2ZNhr3W7srTS83BKg6eGDdmkSyJcYGk1Dzix2MjjFMxqkN2cb3DUw21FfvU9V44nwdBdbBn4YzW5MVvVo1y7UfGx",
  "key20": "RzLjpYee3X5QR5tCKqMDQXkcQUnFPavtWbsm5nmyJL5YHxtUYn4VRTbbQPvqfzY6pTv95f9sdN6X2qna3JmdkFg",
  "key21": "3hM2hrGrUBjZis69v7ojTHoQo3iurUJEbeu5puQN5MzaYhGGTtg54318X4FVomujfAnyjxGT9GwYTRmFcDKE77hv",
  "key22": "3buThvKAQCzMxDuvFw8m9HHSzfaA6QzXSuukNsysAVk5ZUznqYsUJAsJY5UifbUW3vqrYV9y9FJYEwTnUFL4FZRN",
  "key23": "649B1vsg97xxEFHMXX9Y4KKfNDiCPDXDutPiVU46oHdHJ4FLNbYSULm5HdKT7XUcKjvfzLgohZ6K3chAipHHUQWt",
  "key24": "3rfUxz36U7ffZPkn3veiTv441SMZ12d4UEM2wF6dL2yXVtKFTSxmhFvNFp1bWNavwLu1AeNQYeNPHLukMBVa19gc",
  "key25": "4AMjW98MhmuqgCAsqbzRV5BGNSMUNaK48bjtrdLF1hLKsA7v35NXkG8vwbbayvaUby2rraF7xGKD5fXrgSwHmcmJ",
  "key26": "53y9wm25USxZcMW67DrZhBQkkeCHeqk2myEx5sYzedZ3ppxbUMVYBbcrfAT5nDonzqf1RvvAYsvCEF286o7RwsTL",
  "key27": "VaKya8uJpM3bj6YbRFRuJsJfgL2bjxFh6SgPWqfdPefEK1RtWw2WznjH8Ro4Jf6Sb8TBgGJkKZRToeJmMjAvmdt",
  "key28": "3mPktYraxLC6EcBG2g8A887HEC5PREvhmWA2mZ1ghkUrZGTQZmJ3Ph6ipesD3dPbrBoFmoUUN4VfjVnRempByw1r",
  "key29": "4t8ijqpaXGnqbBjRLnSe2tNiuqSRYh4DKXTd1Fc6E2x3SXB9NexsmXftYUBWdHrZJVi1xyPTMYVJc7BJK3VoEaMV",
  "key30": "4sEEvwp5rNJ3umLnzbYfSkcF9KadWs4UiVFpjrjLLHNXmdnqBAqYGg1NUWGnLASBLjdJAm3vUWTGMwAecE5RSXG2",
  "key31": "4jLq1QnmNA6gLqBskUK3z45WBHfLa4jt81V46UV9GQLxiZKnBHKAzBrcY54Uj5iXmbj19NaLaxBW4FZHpa9WNjGC",
  "key32": "4kBv1SNsmJULKAERkmE6iSGtpoepCMn4krHS3Nrgbts3H4stTTy6JbzaDADaRqohUvmHg4QBdCN99gqpuhXBNvRP",
  "key33": "4gsupvGiERDUskL6bUEtGc1tYTmF8yur4sPduBMDENKZtDK6RQJrJPR3SE9TjLq6wGKd8AyKcMxpp4ffQYfJ5eAe",
  "key34": "2bi4Rpcv4tgezth5BAzDzVfmtKL2jeYxf5C8dmirgB74TGzASvEELPiHRFACuFfbtRxydBbb1uTTKqnY8kGQnWJ6",
  "key35": "tPeaNDcb2wTbshLi9tUhS1bQpynNttGREvnJemB3YAfAknXeorYGEFsnBuDyAyWAxAwLKHM9MckVgzqB6GW3kKg",
  "key36": "348bTu51g62PtQhY4jDLV38f5R9hxBsi24D7q6KWV32oDqeMKQjdhw8RqiVzpvsvDHSxeSxoeWCKtUssEugHTKrd",
  "key37": "EBJWWRqjjq7xb3R6QRcM27Hqjs7rq8PbWrMe6nKKSwgje8fGNDccJNQukL2ixvUXg2p5VdehThKAzDNtbS5Qn5s",
  "key38": "J3VpQncnFPk3SuxvqYJQrVqMTbTojXjh3V2Rw1i4fTW2h8Xncm2qH3DvZCtmauYw98VacGYg24ezR27MJrZucUE",
  "key39": "2MMf6djsMtYEKMqZ2zwqftcAtDo3jwFXMXTPsoTki9eYpasFauu9TeLy5ftv1ewrpGmXjRzcTcZGLxNDMKTGVtsC",
  "key40": "5wvqL4ErbiNertDsN8EMcRzcWae8qVXmq1sdLoMwLFJfs6gRDbW8vfUjVWdA3qjMQchvutUxogb53QdZQMZmSaN7",
  "key41": "5htYKkNML7G4qz74dKF7LgcjV1Gs4c7fFDXBzDZtrHnuUB4uTZNBwZBnryoS2JhCdDjg74c8LDM8rsEXwFcwcNmk",
  "key42": "4aBN4WdkX4WA9xzEkSYB9y6Rg5gph9XUuUBP57vNv1uzBHF68KvnofCNYmLt9DAzZk8tgDNfLTWTBSG4xQXuf7V3",
  "key43": "R1mtM1CrnVRzaBz8vbCRPKrK1r2fdbMHv91pxuLbs3UV1SAaBwoQDrkq1aAQJJm2cgNySHuKnhWt4pf3zF8ffbw",
  "key44": "4Kk5AzYDX3vkj41Z7e1GpsQogZckAqsMxGExE1Ew4CnXQwF8T9EPHynfV5Xqm2Pa7HoggsxrN6tdKcaryAADoZvo",
  "key45": "5D5Pf5gKK8j7sJTXT9uMmBQcqVcFLgDReZ2rNYhfCFQWKwbzyc8MsKjdSrQ9NAEfpBSoTfmcPsd1E4hWJ4ScGdpg",
  "key46": "5Kusj3FSPunBGHDUcgHZCy3chUvqyxW88wEyZmpJTUhzhGKGRK9KGAz6GGeHFkGdxXNQAEJpLu2A3bcsMxSxFMa4",
  "key47": "4wJEzhfKpFqTREzferpPPSmdVgMpRaHCGitnpat78Ak76Z1DevMR1cVAcXDihwD5xX3kNADyRkMygzGpFgqHYwTn"
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
