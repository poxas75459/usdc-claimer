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
    "2pMXNfFZdkR9gkFiYzRGFEVfKWRBB6cxHaY2QQo8TEUrQNRG2jftxjnPv89MdfU7JnN3e7bt8aNGABNaAmSzoG2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GgSqf8mxid8MiamNV8VGJBEVth1uzFgjndB5intjD4C7Rk5uWuourugcJA7jugC2kgFCFLAg4BsWHgdV72HG1nE",
  "key1": "62iNesdbemF9bWxPHzNBt9rY5R2uWrKqmwnJVvUq7uxk9fBJ6CzStd2JLrq617ZL4AKJpgqYWS9Hs3zxA3YB3ibA",
  "key2": "2QKjNz4o34hzz1BAJwUAkGn1GQvgJGkqxUgoE5mjJXAt4zHJL3N1Hp8XJzjVuXZchAjFpQaJAKFwFAcfchQXvzTL",
  "key3": "2P6BVJ5K3K4SRMXNWB5z7hwXZKjmHb5fh2hzNgVkGScNKWfA9j22EMYYLKFUXKEGdr7tNUetvv2LaGH4Q4x7kNkF",
  "key4": "36w3K9KBicYxDjVsmWSn1tszeHsS5Cpp5tQfPpQFgbHZjurAZJPpK5gWTyB7qGFHF26RgnTFBDH55Fidun1v7nDM",
  "key5": "3T12f2M3sfvg6w1neHjdNbNtnYMYJXJAfmSDomQpyAkhbZ53SLcV9m4VJoYwELNuYirkEPmBCWNxzrLWvEWFyDQp",
  "key6": "57hnQhdNvuziP42cLP7Dff6FZAg8o9LDmSyQZyqMxT8ARcrMeDPuRef1qq1j4qWvwjKscpR4ySqPipKt42X5rZNs",
  "key7": "3KFL8wDjrmBTazmov9CDs2PBVbhHR58Q9zeTbjMEpuoghoi8kCrqT1ZrLPJmgoYXQXNWKUz5kcJVyNXaCbU5ngH2",
  "key8": "4GqrpCHKA3d6VRPqL4RDCuZXbBTtuTwC2X1NhKpXxjwTk4SL3qruBQZugZ2aWdePYkxrMtpp6yBcFDm7e34nZVXx",
  "key9": "pVUHJRTv94xgTC2B3j2DDXXpXnhQqyV65xWc8or9wzbZjvkS9F8HMaV6Lofc2uT6eqAW371TypMyVWBQmiJ4Jrm",
  "key10": "3xJAkWy2GySSZuXsfuRKsFXuqCXB2Va14uo3xaTjGje5TLmQAqgejmjTjFK66PQEU2U9teFDDBHTVYak6N3bjV47",
  "key11": "5k6MCRV74woErpoqe3LijDTL4CD1jFWdvBPFvCojfWbt2oXPgqod4cnBkKC3KDogF7gEfVtCwqT8xuDkhaCWggnV",
  "key12": "3pAJV73iozLtGmPxFnigfDyoWKEyS2abBESQuT45WggoaJHPQv3LHK8ayBekKSBktoSnQhKqJELDR94yi1r42UcU",
  "key13": "3NKEsrsk342G4BRee46gAkerVuArmqs9AxizcnevCWGWVYcRMfEuowFH6HcV3YtzcGbHkjfdjAUac485nTsZvM3t",
  "key14": "5w4uMVjMuMSvEcqn9vYkbYPbATZFaDXvD3iVwCy1VzC4ojcTNeY2ZYmrZx1P2iaT3wosgGrcNTbgcaJfrAXo7hwR",
  "key15": "c9x2fv4gWGmSvzTHKaLN2m7dRoC7acbnwGbRZ6vjoACQPmmSjKbG1hb5awna3uSm2NKnjwb8XMSmLn2XfdNqeTM",
  "key16": "5ENgzaoxtz2mxcm3jibCvvxCvejXpLyuHFrzZjfAqdPCyJaP8rU1QPvqixjan1m1AVoRdYBEaa8iQ2AJXfqnEao2",
  "key17": "4kkCdgXHGt44qpquQYXEVDqozijxp4mXzUXTMqVvKAW5vvMxEsoRqaHmhUrqxLtZ9Z1JN3ufWMcanafA6Q7JmEGF",
  "key18": "2aV1xxkdLxue3QVPGQepJWfKyUPv9gFZ9N6ra8kBHhgQEKJXXsaG5DDmHxCGtqz43P24QNyiVYv2zoHy1B39wwc",
  "key19": "QonwJ6LpMru4rVkMQRVyPyUDKBGkp6noZnF551t8ekCs21hUYBhuCG2Xudg2S8uFLEt6heuysEA7Eo9or9fZgA6",
  "key20": "4Gp7CXBUAitzc4bLjP6847yfHoSpj7CteYj3QFJ1oThXYimkZffK3fsymfAnZnC1NrUwxyqaKVEGSTLwnAjCvtrH",
  "key21": "3Jq1vPfzkbSNpF6r8ikBSR5KEfqUuhD5LyE3221Gee49dvaKar4rCcPhWwsskEtDT62SfjsMrxH6gToGL3cJRbYY",
  "key22": "R41acaro3TnDaS5QenG3hrba6yqAQ3pXTekMHsb2VWyFmEb7h1Q3boQrhGFQRCbNqQawm6qp764Q95BgVbkBbZK",
  "key23": "2m7WYL3pR6PaZjNxAhHz89AACSyjNUj9RtEUYPeePD5a8Cqt7BV62HzaHecm7NpfLFADcjvKTBueYGEnvZxFaoiX",
  "key24": "3aGfJrNvabtJD1MG6GtpbJoCpKUFfWjRCYX4fC26Uy9xobYSYtwXV1oCp9M7tS4mWizpynaH6QgsdWwroMJvmesZ",
  "key25": "5mLBduwhcnYLUQSfWv2nQGD9BeBGUrDq5gcTbwtwGJJgi7StQsxkzqcngmMm2DSzS8NhQPiWWNsWiDzT87XL2zTH",
  "key26": "T6EASb8jb7uSgBdEAs6ygF2XwuizeeHresCVDDLrKGxnUjY8fqcdhvS9wtpLVrSLTwcEn7wfmTDQCytBvNaNiuz",
  "key27": "aLCdZqcdQqNxRhSK6ArYZZ724jDDs7Jmh8QFpk9UYiaGUscGyVj2pVvmNzEPxVYPbpGy4KmwSD7ZALsrrogeuHx",
  "key28": "4oCcdSQNhmno9C9Cn1ggwt3hnv239s7AiXRGySmi91GULCbvWqMggmgugaNd1aVf9qfHUGGLH3fnPpQLz1Uk3eu8",
  "key29": "2iA9DQKakx6fwRzfX3xH86RptfSmRpcCyKVcnnohgeYxghKta4YvFe2Pzifbge5vn3e4XDRCEs7UXGFiAr9af71y",
  "key30": "2qUzRg8SbfUicv2g6FGBkVn1agUeGpeXnMFeEKnTYCWUYvbW5kuaZCDX6CEg1PQdysbhW2syWnZjVhRdG2d5bWNP",
  "key31": "6Gi2LG3WbbeMTiorfHAwTbNTKLGmSoZPQZNWDjtuwQi5W7KPyvzkVu1kZEEGBFu1qeMoPcpkhywRpxvAuFio855",
  "key32": "4yARCxobiVHD91UdqYi47aRW6r5mjtHkBByyUJykT7NvpGjbpu7X8EMYdS1nn7Nmx2BEXPxYNZMSfysSboiojScF",
  "key33": "422VWypHt3uftj39CXEeXSoby83Xmnvrj6ZCd1PFShctyd6FLRhmWcAaEBvDJnnkwzJLRPx1JawLUHHE2S3nZe2U",
  "key34": "DAYtU78CpoC5tHxZL6VoQZqgoxd3QjsGeXCmn3KPp3YBvY5ArdkCBPCQ8UWSfqRXU8BTfskqnKNrhJyuBm5RJ8N",
  "key35": "58w8SHhQzUsxEgLjNJ3PB84ep492PsthT1haDfVghdv2WKqE9pfo5rThYm2Bxwd7snP4EfcdiwoaGHXPnuGVCnXx",
  "key36": "5X4Nmso1xFgX5MfMFMzkrJ22xnrp998DYgyvxBvgo924yAcQEPCG1ox6ZRuLYfA7fTkr1Z24VPMPNgFPvcvdjF89",
  "key37": "2RWZ2nH7aFBFtuQd1iPcAVHqE2QBZWg2jLx3pHNxKw9k2UMSs26mve7THBdvCAa6sv3FWKaY75qEVo9Tr4Ajun77",
  "key38": "3WjK3DCSWL3y2z2iuQb9SgsRMjFZ8NnCqWURPD3aeLJ6EeQnUnxGfkmB9oAbqbEbJWfefTxir4qgGWqjncRcYd4K",
  "key39": "3rKC9ewfUPwTKSFv7BHL9QiQazaGN3EUfi8voQ2jYs4kwN1GLUP5bVhZhovoFKTVcKWWBziYmsNJtBBzz8PbyDNK",
  "key40": "5miyWbdnLLURRVTJPR7u4tkwyWkqQ9SZkHx8MC6CxcGN5YJmnBPoemRrKwy3gnFPToxDe93CuCuBvxHTREj6mvco",
  "key41": "5hYsGKTVQpsiwsi5GMJHZx8Q6g2k1Uobn29AMQN1PAk9M7zNfLE8VJ8CjcwQgMCP5t8XHhLHyt7Jh5fzDWFWqjy5"
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
