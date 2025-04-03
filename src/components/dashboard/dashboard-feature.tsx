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
    "2uU2Te362eEDufoqPUjWGE7eiMLFyzfhPUmG4o4rrxjsRjVZLX2aUynsSoo6sW1Q3JaGbL2vfDd9Jz199xGqqCpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cUo1y7QgZDeWCDogHdg87oXUPX2yMEfz8z476ja7MMph5UQUrYtCc5iHwxD8N1yaFJ72fZtup3p5tqz6BrYaohT",
  "key1": "itbEYsMRrtcmQ3rrbXg9CLhCMYVGRD3pJvm9vDua6VWZMFty42TESC9rsCdJvpyB8sTp4exX2WhAoFEu1gK9Ew8",
  "key2": "2chqtfxP4Rt6ziHh4mawHsgo3vnFhVbh4jJp6U4sSoENaM725hGUSjyWWZ3eg6E2ezN52tNWENUxQm9gNhmJPmYm",
  "key3": "36MpAGeT1kBSa1XYeVxYUxzo4yxa4KAVo2bSYgv2y71AdQiL64i7vVxqgGaW9Xk7HRCsDGxVShxfBwN5suamGc2j",
  "key4": "53tFF6xXJV6XiSmvDRSxA8WAz3TcBs435Kn7cUVHFZN4vqbNwdSrqSRBFUzJ1oUS4oSte19jCXvFRmzv4rwPzoU7",
  "key5": "3vLKQiwoYtbfDoq5fqDu6hUrraTKBVsJ1xwaHSEwAqeXdyoL1PwehPGMcG65LmRMRii3LY8jT8ckwHdoBRxCeFv3",
  "key6": "3trkCpaADiHCTRT4NnDCQ4YHRBowdZJi65o3yKWYAZtdnFJcHjmHUkZdGQFrTm96r9qEXtqDdtPJWkrTvCCNWCKG",
  "key7": "4U5PLkHDUBWK1CtFgAfbyhnKG7fUUeoUEBvsuucn1tPPF9HMB5E5tp2BeCHSDe6qxQtjTvEjZaGi2RnAG6SyYEez",
  "key8": "hipS5EMAMGSE6ig3xnrNDKiiRqaWdSHZswnJaB9XfRYNePFhsXAGji19Kg7PuFxhayrT4AR4CQip7f6wBF4uhn4",
  "key9": "5HjyAVLBPj4MffUMgadkUNZhinQPKkBWbvwAEoph1652rCMbVz7R4PbT3KMh3S8oqVMhYBknR8yFSz8BVgqiLssc",
  "key10": "5JwvdYPWJS1WaEcgNw7YvTf5NiYcB6rzW4nVDKCLqVuDowjXYPjWK5JFAfiqPcjPpb6FiBbtmq2KZMzNLSn6XXhE",
  "key11": "2vZiwiz7jK25QX4MukukX8jmkLXhLJjp59yahL6fL5gxnSDsacDp5cFSWPgvNyUVUkP9SR3n4pPUeS4f7ELVgJFm",
  "key12": "2VSCsz6YHsYYqtvvgykKsboRDaouZ5aHxFjsW17mvywGGTdBgFN5JfoF7LXHs9UWNzgzpfSq8FLcvqTkLrNfTzWQ",
  "key13": "4tEY1HqbUbi5YHYDhVM3tHLzAZJfJKwKGdYFecCpcRS3dVhufLbJMT8SyQrXrsi6TYwucfPTaahvWjtMSFNxPkLf",
  "key14": "BcqEsmC7zvgvZpEk5wuXpbkznX7sPR4hZm6hBc4PxPeWJGYoh6TGkWDsF47Q8KujkPeBL2abo77bQdcJnNoCcKn",
  "key15": "3Kvx2czJPNmtGkz7KS4thW1M1h9JtdgHe1PSF2qTqDpYcoka6B8NTRa5Eo6mST4jaHgidtKH7rzt6DB1ufg9VbaD",
  "key16": "4HRD6MchWhPu3n8QsBUNC8z4ZNDQW1n8nk1FXPaoTF6dSEC3dcTodGkFGSwhJk14L5cJgYQ5j9cCXcoVpeDqQ6kg",
  "key17": "3n5BXJCGnTqTSDsx1SgyhDiFMtPAfryxQ8jUF5ZshFoWXspU8dv8nBKeMeR78LsQs52nVxboLgSBNCrJNxby8dXs",
  "key18": "58e5e1xcyjGiNGUU81gwSdPTKUzfLbCV8vgZtevFdbZLctPMtzcpYKxuRKyo2CgTDeipYUybfJwvJKuqZDw6Rynh",
  "key19": "2w7En5em3w9CCbniktYdi9YpQQt2Z2zpTSxcjuoAggWEGVLhHzw5VjCmgkW2A3Rjq4Ss95BDuq3xKRBURNKJzWHV",
  "key20": "2bkD2PnsXsSw6eiebP8UsMdH17CMfUxszV5Vfu6M9MPzCUZWEeZbdZSVosXx59Pbhwp1kYV32zvWinxyaRVUSvVo",
  "key21": "4jMhRQzxBNqhp4qjZ1z6dMfMqo3aFhfMLiGuJu9rYaSNNmerm48kQR7eMUksZkACNfXtHSMrDrfayhdr72kFHLdQ",
  "key22": "2aRsaC6bTRkTbrysrkv9ZJMwZLqLbECkhMNhuKvJY4DvNZV8Z7voEwTsUzbdM5ghHUp2a6ZDdsh1KVcNWy9aXdeL",
  "key23": "2o87EoaBEyDFnAqYatKZMkeWvV5KxyzEoiQZQ38oMJ8zBejUR2SLh8T4EWtTnV5M8SZgf2kc4P454oXbRMZtxXW6",
  "key24": "4PUfXKKJt4EJPZwSaRzkE1WN1YJTdeaUrqJZvRW6yYnZnimp48bhu3JRwZuP1zwKh1w7jVVaxdNbNfgNQPxe4bhT",
  "key25": "3y7YEzo8fmpKWi9xWv32CJLwr3fRpvDDDmTv39UaDaypxCXfyxbEwCT2TxMeRXSVaL5u4mWjH1SN5bpbqqQmSv9A",
  "key26": "65qMfPmN9bw3xbp8RPu3RcHt2rUX8ZVc3UatmLvesreTSrVy7k7XdUX7VrWGosFRcPbhoeR9Bi8Q5ckqxzj8CV5j",
  "key27": "GjLByGff3yQ99oRWTRv6Pv8SeibbcyXoNfQdoyUgCWwrEv7q7pjaX7HLfMHFLfN1tdQB1iyeYcvdEzo7gB6XBEG",
  "key28": "5L5TnLwWgUKhbhAT3AExQqLce3DXTNdJRgwf5ZcfDp6TsRjtexd7xBTAqs1fDPLNS9pkzhf4MwmWatj4N2uuojRh",
  "key29": "4HCxryChB8RYX9V8ScnszWuYjoNSna48rWifgEFYqdjidv54DajFGCEB8agFEAaXaDAiQzcCU8143oSj5zoywwBZ",
  "key30": "quKmQb7V3xVNif91ckTQGQp3ph98cTsjbPtnfCHTf6uPmD7guaefSWFqVoTjKWbzUsv7RA1o6nd8EUWsMjHxvWu",
  "key31": "5Pa3vX745itidkgrtUCGKDDCjo4a9Pdoje57wW2UwT1RS4JNNzdRgdN14SYziHw6Npx5jWxFiLVcbH9MsAKYK5mx",
  "key32": "2hDVDbJnRLArcv6wsfuKcnNS14jSYZXzCWzMbwi94nijhhbnyjfmLivKemwMPZe1pYXT9YpQkHJ8FNeDFNjxCyQ9",
  "key33": "3UpenmyyP6o5jJjKmKWUNeyGMHNtzRkKfg8gT4vYgEcaWvbztGcsMWt2oJ9idyPSn9R2H4uQtjeHGmQG9i3wfJaG",
  "key34": "65hJBJK5kAjEMjN2h5BgDxztcp3t1XKyXdsBpf5xDT89HSbfxau7PubET8P7TXshmEX4eF8XWBig5BnVRG4HYZHb",
  "key35": "4eTjkYMuxiRSuvv9xhD3pYGzdxbTAtzxFGkHfDnXhZYN4HDAocsfUCW6TgrzfoDpCvBx4GEmxAnBCiiKaQEtLSCL",
  "key36": "4paTjiSvWfcCMEx42Dcn4D4CDeELJy1XzkWCkqyiaZeu8d2h9pmoDk9xdKB76vaFxsTESf5xVgAmVMq3gKxd2rjf"
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
