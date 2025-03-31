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
    "2H2JFxveRLkFBfncc6VKscqQPUew4NSknHd7HWbJHfCuKVnQWGAKFHxe1uTDyi3CiQeEJTRw44YjjDyoXAyUobMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CCrQ7Yn5XfcpfPJyL2UkPWLHwWFAz5iGEUUjUT9qsubsX2JuPekUNH2L4oxzZTvx7wZ3sMw5btWNGVgwjQg5PXq",
  "key1": "4tnTKmVeD9Pzw6pwBxxXjEc4ervDA2JbGCgkKPJGgPAgZo9howCYjZ7ds6ijPuhjbKiHXsHX42nxtCaxz6vYc1rF",
  "key2": "4gfioMSxA29GGbJjTHDrKuYPrKYx7Tfiqwi1sSseExaCqmu2tJoLTdDptF9NZSxxWp7mHtJXS3y1FFvCqnHDtVgn",
  "key3": "5DetA5D6Gv5EP8BPr9CZ4TQ7dt13hLpksFnn792LWscyzb8LkPPA4WkF2XG8Wycbe7yaoAcnFAkuw1PVegAJDbWD",
  "key4": "62vk3hrhKwmaaAoDmzRKniiyPHB6xvBi4fzLXFKnbfNS6EzGD6eEGYDh6A3acqggsPAeyXjVHbxAGPf4nLRs4kar",
  "key5": "Hw17kek8apn5tKrtg1vXBC2nRhp53DPFTKgWKgf7ocLwvbQtJqwAV3pJuRssBJxjCfPXGWmD3oq1o6tzyU66ifR",
  "key6": "4SK3cF5gdcHGfvDTpRGHUFYHDzYMWiVWBbvhqbuPMmi2hToPAy5KsMGQroqhkVsTkWk3EaAm4SKGbTU1gLMMQveK",
  "key7": "63gQWEygEfZFXTftCBWavwxrHk9cNzAQ7L3oRrtNFnuUSo8Dr6LgSmHxDePF5A4opNPEqADEVp6RrbgWErUxd32S",
  "key8": "2J1CqtHLMieEC35JjgpXCq9vvhyDSuNtdMq1zaxA77rMKCCAg8AD5y83ZP1KZXLY18THXiUKzrYiYUnqwjZcZBeW",
  "key9": "YzRSLBSTDvJ9w9GCmv5dVXXEQwHNV9RDAjDomU9G8h7NLW1ZujnoMpMmbtYrv1LwqMAgVSQwVwvRLD92XLxMSVh",
  "key10": "2PbMGfq6MkHoUC2UDQKHZZP1eNnfVaqMS9f2UQyY2ApDQQVhS7zifzKuZ9bxb15htGPapxQSQfv6vHSkkDPjG5Ea",
  "key11": "2VzfLWF2Wn23VNAnhRFnZKYZsQRf7iHrD6URTHFjrBsZFDYL3gGjp3LZxBmHDZpsbfRpYADqYnPA3rMBy5CYrDCT",
  "key12": "3NGhydokZb5TvoQrpuaoeBtsVfCJB7Uos4LdSzwLVydzY5U7rN3mHQvXqchTabKM6JgyjgfJ5Pf6ZLQcb3qF9gfb",
  "key13": "4UkwS37V1Cjo7GjsH5hT6EvWNxeu9bUSiAsaPLH1ubFW9UXaZRWZWbsAzVpKncLqmY1YpygA7kDEgh3FN9WLa5Yv",
  "key14": "2HLMwrrJggmMxkVDWRJLKj8u82JMY61oV8pQX6th6N6q5RHNGcUhZMycDXy2a3arRj6mbL1vrwqfs6PFQUPakMaj",
  "key15": "4Zsz6YY2czW4UfT97CRxw1Leqa9wiJJfQNwqu7gWQAt4sEsirJGgY2D7rY9bmCZFef6Ybi79A3VL7ZWikH4AXJy2",
  "key16": "5ZtBVkPoyYjXgoZemwbppTHqxPMH7iH8tHDc6MJQ25VhHFHeAqqESkDwedoPMTdQYan2X2vcBGVM5KXGtccGuywb",
  "key17": "bsYwhB4N1FmK4cfKMW6BuWJDhbZ7xGnuQZNurGmscbkhoguN8GbcxLLoffMWTV2MgopDabLcRYKamfhNPRpsrAc",
  "key18": "26DAV6aEP8Qzsbh7NeMPLu8EfRz9TFy3incGV8LGr2tSXoDTaqvG2hidy456swrzhP3aYA65CtBynn6EU1hpkwhD",
  "key19": "2jUj664WfLWTVYgGaY7sj8KHP5C6KZwpYwrRQMmU13JxFeriktyTpkcbaM4wUyRRt1ZG14MednuxHraKV3KHHvWi",
  "key20": "2Q3DESSQAwRA9to9hZxEFiGd3ekktw2khA3tojopQKMY5XPK5pmfij6Rj4ew4QE9PAF7aKsK1FRqgGb3jFwXN1fB",
  "key21": "2DJ7fk5c8enyea31e9tNBMjJdjXeaVmCft6P3hr67ZingLcR9GeyDYiZu4GRi8QQ77Xx65BHkQYySLP9ck1jW29S",
  "key22": "7ejq7umSchKHHrUc1bVoj23gBCefQb1iBgjuJXwU2oSxH6GrH29RQ1tQc2E8bmiNgwyYGaHE94vDi3RpBXhFoYK",
  "key23": "5URcfq1a35ZGfVwAPC1dNNpF5jDpLunGotMmj6UrBamh6Bj4Ui6q5PvFJf4HVXSqHj1E283tXAuXxGhJR8QVZuex",
  "key24": "261eHkk7xtetKddwqiDNwwAjfXrnKUEEhs9bQXdh2wcTbnvS7MhkWLLiXhKTRog3Fw3TBuh1FGku7SyjmFrxM4iw",
  "key25": "UDudoENTWjabWN2NbDtxMUYUWL1zqawPkWYvxu1xRbLmHPoYe5BeKijv8dtGuwiY1ufDvhA5aAcjQ7HZromjBjS",
  "key26": "4DbFaN1w47tqjchUH4byC97m5cVFcmxuqmEdxFdNZri4MsNLeC3B5yR4pY5BPRGZgqotZaAUkP4CrQMFGjTJsbdE",
  "key27": "5V1YPjEMnm6ghFtgJyBmCKFm2cCzcKpoB2qH5vY4ZmDm23he74Dm7VSS3aVuuC73CNLzGD6y2g5vb4RhdJGhBVRP",
  "key28": "48ajZNshZXCmJoAhpxoGTR7HeRn5xRUt5APESKGqXYxtYNiUwcw6gJhTRDGDB8tDuZrwRgJ2Geqa89GfPoQKtJ7V",
  "key29": "2gf7k5iSFQZGcPmnB4fD5ZQeNGEjPmSQmsWTVTKcuL8TNevwET4QeiCSQ9bZ4VBopTyNVJvB7KobcE38jAG9zWDZ",
  "key30": "3gvmP3m8wpvvAzPN2t7Vuxx3TbNP1GmUFDpQYEMaQeToYmvP5Ekoh1QZdyiHuaCJaRVEumowTwmZ6oRaQBZUGSMw",
  "key31": "4uyzeVev6neXrYdNXndjg4R1Z81mT8dBhQ43jqZNp73dpfdT4n7MmmuToNz9zVsUiTPjw7W5fBEpCzfzwqgSZCsv",
  "key32": "2nCCQsse9sDSniKtjma9FvtY2Ldn4RdFPNrD1MrVo2tx11KFXhxDYjs7B63VRGKTY7sDk3J7BsVEtXHp4yavzK2D",
  "key33": "3YAX1BjbqGtAnFEjEpXPB53eW45omda3aJmVJL8sFn2vtftFxehGF5GKmQHjcw9mcNw7d46pXBcZsbSZ4eYRnFSV",
  "key34": "5tvwaHQUEVf28V8yb1SHQsgCCLJxrTfcP7qdsjU5B8yccLSWi8g4TJDDe8y7PkqbfNc3Lz4aFpquN71pymPyL5Z5",
  "key35": "3zoTxYrYcvT5Lfwt3cRpWBBVFxrkYZQ6LbH3bx7HdGmKXfeoyB71Pe9ZYgBJCcQLDoobxW9MYkKXquUjhXr6c8Du",
  "key36": "hxGiKiG8xpP2vksqzmVhN3ed1MSJwLwF7MPkvgokSef7hca6UM7YLwJL7PQJMAY4Gjto7haYGU5PFUBsciVyHCT",
  "key37": "9RLKUaPFFw8V3YywAxpdeDrPZVJXJ4jAon4UfDhBZvw1CQkHKuZSQSSSiRjsuZSTuABXuPHuy72iEA6jgrs5rQX",
  "key38": "3pW4td9NBKjmGYpKFxLWj22AYjpsja2xWCfeqLEwwETDmCwk1hkL6V3636sdR5eUpeCWSTeLVNkneiPyMfvCZb2N",
  "key39": "2tseWcwfyK75TBE6Aowh9zo6J8iEo2HydxTWiS9hHamquKo9x7h4SQ26CvWJ8VP95YEuRvfQsYTQyee5vQcneXTN",
  "key40": "2DDqHsMuyVaVbDJB9pHGSg5FbsTVzRqasTQnU9uSMbinvVL77XEWufr4PzcRU7Q4aJYGxg4gRYoFG8zknDPFcuMi",
  "key41": "4WrDbyDyHKceTPuw9YVcfR1skGEuxyxk6ed2qHVy8Jy7V333KkbFJkLUgwaXyghnk4ujfoUqjc1m5wTMH5Tqn7pk",
  "key42": "2FnMDtYUuBkJ9TVJf8iZr97AqHxcVjYfefdtAXjJg77fqytbzoYUqzvt2UkBn7q4JxaBDSurUovVi1nc3B67wgDb",
  "key43": "EMyGnB8iJ8QGAg8cka2f3tWRf6mauaQeFw11WCbK1D7grSCuVFNBjmQtgdoSKoX5zSs6pKLbjJdhH3YJwUfNveB",
  "key44": "5EHRquBXQn4VdoRALko9n1wjmHTwnedh2rpXNupJMxz4NZUCGivtK9FjegmExgeRJFa2byzjFk5sh57meUpR9u7m",
  "key45": "4i9qfaMyE6n7g4rkdL7Aog7To8rQq6sgmRgALNeQZJWXyrUsPsZbGJiZVvvxvy24hXHB9feJCji92eNRntF6ACRx",
  "key46": "ngJmECopKiHEedmozahjwMwC13cGzLTeHt3rsg9ESALEmEi6kAV2LiNTY2sU7QVs7Lac7Vm1oMtYnxjSCbsufTT",
  "key47": "6sCnp2EVyduxYfhYuSADrtbhXbUiVCSZVoDh7XhTzJHoioSeuq1xpVeLpowkJDtfq4AgwYWBDpeqiH93TQ5HrMG",
  "key48": "2WzDssN161BTWFqcMwFPjrjeDjLzrPnZ2pSKCFwdhHLR9T7EmB9cqdM6CantNUqCxQPGA7MywPFZSDKAeXzJxbvF"
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
