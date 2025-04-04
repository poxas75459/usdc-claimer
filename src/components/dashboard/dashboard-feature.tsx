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
    "5GfeYNdrVenB211tkJiWnhUKqw79YfHt6JucqFhf4SPhvp7uvNTpXEms83ZRHBLqMoxADAvPFod9c2LyvAqn1zYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h6ioQWCDDTdQFMPw2LgNiaBRuKYXSNio37WFe4H1bCSNcESX7hrvgKs6jV7bDNiXGsq13fozSfXzHBUmvwKqLdS",
  "key1": "2dpZVrme2Mf8gX4QdDu6UdbrRHkHBKvyhhH1fjkP6ZVFyu1JBrX2KziSo2JVHHoDMTsHnccJjeuvC4HEqRqZHwbs",
  "key2": "28WeZKob1x4c2b4oQUbVX8QKXsHZqqaQk4HY2maj1DNVWZnwBuimuJ8NektY7yTiztMsfN6woU8sTfn5CtabeLxy",
  "key3": "Q5f8mTkreJbjHVGTK7hvGoYA8HGhRFnxvZhWHGQ1vv14tAoWpxteZxuLXLnT2Uqr65BurCutyA2N3tii2PqRArn",
  "key4": "2Jcq1vpQds3PsSkmEha1stfWue9T96VmQ2aCU4oDXP6yJ95t32Nv3qzBpBFUhPSyWZSTLhL6tqDXZnKDZMzdymZB",
  "key5": "4FWRRpuT6XjiDi438ZToSPNET1Gp2LY9n2tggpyakKGj1MTGnByjqxTtJUbXQ8Xf7neA4AjTjSqxvERyxT4WjFjQ",
  "key6": "4JGZ9tZ3rZkFXmCvNXNpLDpG4mfQRN39jYKdWrFLSpFFZDXTCwxDeNfmeoGcU4utYC11h9Ttxzw1pscf9DouTQEr",
  "key7": "3bSR7GZ3zhxDcwPGniCkjqk5RB7AeZRMEEnk7z9Xw6AjMtEbnFdu9unkV3uw4wMpKPWpNDvLdFWggDJzT3hp5dya",
  "key8": "3S9653RHTRZWC7a6Tcx4BBiV2g4T6WhWK6eJUFy55oFvAJE5Kaqi8itHBo23JiSj3V867uP44ZLMBPbJFuzChCvT",
  "key9": "4XBNW53Roc182Fw3to3fmWJDxoEykaNixVVDLUEyvEpKX9pjTMERvUKtybXXzGnPij42zcCBmj39zjoUi32eggsm",
  "key10": "3q5rErgzt32656PeayoYwcmXSp11QackjejeBSo35vWVefv4tMFFsNMirBDCEmc2DWeQs8XAxDpUuLtnTx1vmWpQ",
  "key11": "2wYb7Vczwcc9ZiDj2ZVHPcyMrhSs5ZTcchfUgfQCVybbqcxpahMhTkZ3enzcvKKVA1EcyWjzpLuqivNJY8oQYL2o",
  "key12": "2C5UcDHnjH3j3LbU7bZDoQwh2gf1tnprqeoZVWF9mV6naf2ymySpF4hz4HaDpVjxWcXK5NyAnZ49gAxZcpa11ePp",
  "key13": "3k4u5E2DPWH3wmo25pVKkNzoGrSjH2uh8m2fzpJ2BCaUyhXgCW3F9UF16xwJvqbb51GLgxCUTELcF1aqic4Hu7Yy",
  "key14": "4EkmryK9DKQPVxxmnVttgUHoqBk7vX4WsbkBBne4ADbEo3WQZsfLqXh23XeMgDMHjYCvVTyfVsdiF1BJbxjVKqki",
  "key15": "2E2ciGD3cANrZzcdFDEr8Kqs48ZbufwNC7ynFoixv1dBHXzYRbhWLFjZ8YcsHvmve5bPJwdHDVsMVpWDaoiNQpup",
  "key16": "4HpZfEadGuHme5KBzmcYtADLPQvKH1V11ELo2APm2bjY7yKzHWoKAatRhcCw1nTmYiEKBrzTVqeMy59MHfVUULVi",
  "key17": "3cEyLVQomWhz2gSU1SrWkKxpuVwb3n4Ptdep6T8V6CWZdMiW6toHinMs3YfHYEp1raMhipjwRg9E8rxLRbYPzgMB",
  "key18": "463AhyhsFTF8tmcNQ8wNo5G93roTsgkBf1isbXDuJQGKJJFnrKBJGxPUFFXAaR7HPpBZLaeRYSEHg7caZx6SNHJc",
  "key19": "3gi4JHQymzVbHJUj8vhSveUB91PvKEi99dxKjSeqMRe8s2115HN2UTdGKoW237Mtc9SG2LoRguUEDv2UdyzwJFRk",
  "key20": "jJkKfsTpLWRHGD6NT6QivQ9rmEUi2ExEJwCHUGZ7AregFxzWjRGYyHuzFQQWq6h87PuhKgpqvBMhFa4HvoVm96J",
  "key21": "Wkt158XEzACCFS9mR5yysscDQrxNT8RFoi8Utts2R6uXGfYYvBUaqa6JgbRqKtmVkyPRP8ufUQWEnbmjzchTnoS",
  "key22": "nT7grWhjdbGB8q8cbyUhhGiExdFGBLvdx4BkFoW42qAz4wszxqvPKdFLZzRqyx7cuCaRHNEGBZT41R3TrDqEwYo",
  "key23": "5TYuzvdUxKsX3rrKDSrSyHMnDfVYsovL1orTG7yQc1B7GgJYVnvncKgcDRk5jP8LStmdTxELPs4xLsdSKgAuXwLB",
  "key24": "n3DWaJZk79ZCLqb6HmWi96KXxabcwSGxDF4H4JrZwsWoJYcZd2TWT4YvLEPG1L7rcPqSHB5NNoQjH9aTtxbpULq",
  "key25": "5PTWTkQkzqUku9sEbcfK4ePd88QLDaHntGVF8iknkfpe9ichK2rSkL3dQewDrKtVta2Ywvu7HAQdV1A6vgvWsQBG",
  "key26": "32wvLAS7BZWDAorCkfT29m1KQomTKbEB9JafzMjpGanRJ9WRamqzRVpA5p4yfiHSvF3b5xXTfZy2Pm3J2HHU7hwQ",
  "key27": "3oH6ppXov7Qy7HvGXp3uZi4ZuJS4ki17azWY66sEgChDoRBAnEUpJTE4qBJ71Q4SfVgzzUbkzhzh3A5cpieHyDc5",
  "key28": "58bq6NYR5vKsJ8xrPdmKAjqF2VapEscV9DrGjxmCT4G1f8AJXfdgUCn281KuU9NFX7yAxeGQVm7rnzKr4eQjTVH3",
  "key29": "28YC2h3e3vSDS2o4YFy7dQXHxV5n8Ui5G4N2hkn1BH6aTuhKPBYSq96wmuyHZEh6U1zTpWFyqXa5FiHT6iehsyDr",
  "key30": "3M9gm8rEjaNbnC5CJGwh9nykkW2J83uEi8PjsNEkYLcLokV9vm6stybEJnDCWSHH6wcDc6fdsL1GopLCHwpvWgaP",
  "key31": "3hhSTQkRHuhwAMdFez3jif1PYwyLPdDEfVb232sP8pofLbPUHH3vVJaWkng59hkwscH2AgJGG87qPPSQjHbJHBiv",
  "key32": "2GZV8xowgDwphTdSTnPXLKyJWCzYBZUsRDSdvetvAThx6RQZQsxu8uzE2TNqxJaYmgqPspkHdCDUTvKBQ55nS2o5",
  "key33": "5f8CYKU5oYbgyhwJcyLuxJy7ms6triX3FGDZ3ivUa2dDDooSM5UAPtnbpS1SCnqX7H1C13q8R9iogJL1VUDzFJJP",
  "key34": "2VyRZpzCfEvywSRTrgAUpX5TYDzZPQjXF2C4eggsFkyERVo5PXY1vPFuAUeTFEVyevLGQWGdHh3xzRb7bnJrMfB7",
  "key35": "3VTCVYBfLV1LK1cXVA326ceF4DNevFdmjkMAsVo3dUHPNh2qTgjUJSroGw2UswmTRLLvNALydg6R8rXC67rgYZks",
  "key36": "sAeU3DiHKs3v9E6cxZhj7G1BcrBHVDuotyHpr9Kt7YUeS5dY2tpf2ex5Rps1xiQKMZaQP9sCjzVZHDBBeRPHfyt",
  "key37": "62BqbVMQxLhcP4n9n3DH7CuCquR4PLADsDZPzpCJtY7u9cmAnVXZz4B2m3t5sTEyNqQUCMjL7ESbBVd7MDmk4BCB",
  "key38": "3JBZFJTBaxWzUkLx3a2RqyTZfCZhGcUXrHY57mniJna4dEw19gA1GJEkDb4g7gRja9yyVeo59Q2XMo8GDYY2uFmn",
  "key39": "3vFV3nr33PBaEvrdBHgLgri9DRCER65E2yRXkg3RzMT27vrkVte5CX5khipRWmERkwPpfndVvaU2ZDEYGDh7afhQ",
  "key40": "4RXiJmEDip7Egnn1LjMe86Dkzqg8JzU5fRjVFHZcBufY1gjncDi6PbC4rKkAM9UG1v2BfpFwLMykxzXFKr7wWSQ5"
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
