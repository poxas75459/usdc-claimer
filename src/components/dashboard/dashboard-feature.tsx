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
    "414cLR1VqBtSGMRB8zXdDdadMNNwxUj6RMCcpzxn8EsAYV2QjWEv6ZXhvJnFyef6pkDaF8Lc3EHr6ECh5HfuQqjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EFeojNchSDG9LRJw2ecdczQ3Ehg5fT4fFZJXWSZCqCGEjxpcdp2E9o3jpB4FEjC3Fh8qn4sqazvtwY8tpPVb9uR",
  "key1": "4MTo5U38c44DYN6K1DF8k1uHr2uQpsA2VD86Y8vNVVYLUFbK6mQFfjm9CuN5oLp49QmTALp5BPXW4iortXiqXLf8",
  "key2": "4mrBkUYcmZEbnzmTUiPWRMo528uw43ZEqUYBE26uZPHVBobteBTcnFmbhmA3ua5f2mLvThiFNwJU2WA4RzBBS5xU",
  "key3": "4nHRiuLycwBkfxu3EqbTC4ZP59GkQBcvzQiz7gqsJJ3gugkJEfhEBG2Dte5LSQWFKShDaTWoXBDyTDNo6bqgwgP3",
  "key4": "2LnjPGwxqNPp4mnPZv3yHXXHAwmAzVM8QX8UMw1WBwuQescM1RdHe6omxmPdP6wUoyTPVA98stFCp9pTAvkHWeGE",
  "key5": "39dCXirEMBzdCXRYWYofLEDF2WbWUsakMK2ERSrcc5vaAm9n7f1Vg2AJzXUFrK79fo82C1acj4pvCCQ4oWNiDso3",
  "key6": "3YzxL98CPjvhRiGT3AyPzLyhGFYWYPQPkD6tGCd6pjTEx3hDEz9NCnh9XXFE9RHv87cGmjZeWU7TNKGkU6CAZb3b",
  "key7": "3fG4Frqa3Noe88Q7gtPMxnv3n35Bud3NhbCVf975c9y42Ho7akrT8CN6gRXFMqCHALHhSJdF92V3UL2HLYHwnWxo",
  "key8": "5jm5LVbPvYAB7kqPxcx6EKsVtE3jHm8LZNaMDmghJAf3uLSuzXokzgb11DQb8d2A82N5c1ztzaPgFwS1jUwaMc9K",
  "key9": "22Zfxx5TzCE2CvU4DmFtCKBzBUqWAFLqjahhDD5xH7UzHAFW3vrJrtCiVwSDfvBGGYCBGyg2mbz4RD2xuP7XySVT",
  "key10": "3F4EdZYrjoXThMgg4YmvSkp9yvn29t4ecibhWZ4XZwerPUi4nJQyFAsgJkzazPcTAND1cEbwkg4vTjGyXWoPZWkw",
  "key11": "2SuBthjTZthkLJUxyMMxBGzyEd5G1naFhMmeVTCkLX5sGzK6N2WAMaitMe5LFfKeM92FzqG79kaZCp1nG86p5zuU",
  "key12": "3cBd4TZwT2g3GNL84mVAQHYq3Kvf9UXUksUvAW6N4vwPbNvyPMeHbUqPFdwidu4ESGKd1nuSo9qNHnNz1J1DxZfk",
  "key13": "2EufmjuCNumL7Ha4vy54GgCHRBgwH2ZpMMCtDDicTy62Hudn6fvj6TPRbFM9mmBfwmdhoBZRjmcg2G4QNdcbMKH",
  "key14": "3vEG5REPEHeT5SS3AGXzGhffDkhYP7fCXj1Shvv728nntQgtiZ2wijJFQMf7viRCCFMnmbHEKmHoBCTDwWkoi5A1",
  "key15": "5vNuWgLXKGNa2igb2GsoEZ8itYWAoAyTmW2SzYxkiZQR21SmX13Bzxrrj12AMHSABTBRK4Hedo3dAunwtvayZ4vi",
  "key16": "4A5VeGQJEs2VCgWKzUByDgkQyxqvijhnRZzcg5yiVdQGMe44s9CLQ3NzAF9e7bEvVwtka4HH9zWNvEAoRH7gJuve",
  "key17": "26RdRzXQQbpMV64TzZWgBKS6zghZs8T2Rx8Y13c6KNEYDg4VRqN9thiNTYAt4aaM4DRTwa4YxyBitUKSGwhNogsE",
  "key18": "64iZ5zDxZdg31CfAiBZr57JdR5n3wCHYXz32yoTPLAGNKu6Cc8GhAUmauTJ3w3esGMCtC43UMGVsubumz6hkrBr",
  "key19": "44Y293v4VM2vvFZftpWpeMUNAZ91UbTdz2ahyFd3kynyxTmuMB8HH72bTB34iG3cgianK4QxEmqkxHpeHB7So3qQ",
  "key20": "3btj17G2vSnW1VUKwD4cXSyymSrSfW6LME5jE2XMb6dYB3gxQan1Wrs2uJhA6zQv5QHi4GWfWSoqxfXd91AGnTpt",
  "key21": "5rMVFJmUVBqKpkLxhy895XHfkTRNSWNNtYKw6crzTrwrwuuZvwEHf9KAVYKx6QzHtkVYfVjsgo8W9cRxtTfV3m8v",
  "key22": "2LVhzUkPi52bcAQajbr6haT9WveyqrNivJbqfCwm4vJferd4ZyqoMG4bxHNAZsqvTBtKdqGDKMaBTw5Fux23omiG",
  "key23": "228UKhHScNaEai2kGVY48yZe6McyikKqfYCnDAVDeBZoDAdih4FTXmKaQtbz3jcnXaGd5ccaqtYaQqv4eFSLNZZk",
  "key24": "2TbJuDrrxUYuuyw3pZT6kwJeaUivmKsxbxRVLctSHcay97Q5cYenmUwd9wHbaTxLPt8szNuJrfk1Fzbahu2Xshn4",
  "key25": "2cRCBRwzVcBHLTWtzm2vxRWLn421hgbngbbaW8KLADZ3D7TSLLHbbocJ1hhXVqn9ygRaQo76xk77zXhSa34XnTuN",
  "key26": "2kTAxhpz73Kb3jzzQvQ6TQ4sJrRKvVKgHwaE77gsi1C7wRzf8dmigJfAuZAgaFzi47YryrjCmXQwEuXmUqVpg71h",
  "key27": "4YPX87oFFtUfgDpG32ePMLfRWiiZ1o1wLwP9YCsMqnS7xVCYfo6BPP5TU7uoNLSAZBLGnr9y7UurBF2ddnWdDnDp",
  "key28": "KwjSXaTNygJA38sU52CgNgBX9q12468Pm2kqcDPYBVQyndXTepti2H1SVrMERq9jqDYZiLc8GNEmr32v778pC3j",
  "key29": "5kJwZb6n71Hi4Hdq7QpB5uww3uyezZZmaK91meipJFtCF7hgMaTP46PQx72yvugNRSTdt9UZsb6PJwY4ynHaqVcE",
  "key30": "5PxhJgAQuHayucZq3rrGofJkMYHAFsD8JVTe88hVgwhoe9vMCW9tKps3iQWj6Tiqf4HHvkuBXotXpLuS8Ns4zHTX",
  "key31": "51zgHyBKm9MssxqKyMD1Ydzx9K4GUtKVSgwnK5gwPPAdA8YkNZHBnSL8te53KVLCpPaJHK5sFQzfdgzqcMt37cVP"
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
