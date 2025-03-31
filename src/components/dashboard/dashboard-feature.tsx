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
    "2KZEfYxJr5pCRwQHcZvp9yFZgAedhVZtaX5S5yfxsC1cgxqnPD2o5reJqj3V9DyPekgriMmJv3eHDbGVHhsqxeVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YtoQBETR3YA5XFfR36Tk1QwSbLTJzTphk3bdC9VoSm2GXQUh7ndhFh5k3NT6DK6vcaDU3HT3xbb4ewMmfYs1M1j",
  "key1": "3Tkv95L5aKGy4UwDRKEbZspZ4Y8UZcPciFEyF39ELdNNwPrgL5bj9XArYgsoZrffmj8qErvw5H9pDycZLGcbFtkn",
  "key2": "4MuLz9Vt542wLtBhYFPGd4Pb7AfKpG6vrYvuZwBVg6majQRJT1hZRn3xaQf9pXfFhyFWs1eyxHdtMStzYfh8FTSW",
  "key3": "ghYXCF3CNX1wv3EUfkaNiq12rVGYve5uMPUurnkcmuyG7cvH3THqYUHKTrEEN8y4WZ9vdz25gT1EUyHAv38Xtgs",
  "key4": "2G2FBGcD2K7awBMmGWXFnsg8hvpQvARjHfimb33mfzFwA9Hpq9zDutykzU3wRrqMVgTrYJyC3scuRqq9XXVpFk8X",
  "key5": "3CRWnBYmSEs6yEbFfwQen9kwYZbG2pn5mH3S2wLyUJrmVsGuzNcukCvdKvQFFpe32eSFxdCrXX9pQRdnYaPbzzJv",
  "key6": "4mr3bAXqhu19ojmbFm5qnXdCgrzRyMPFpy7ryQ5BMYW2ZQix6k4kKFpoYNUbBxvMwJfD5iU2Sg8P72p8FGjkENtV",
  "key7": "4zEihKJUn96Kc8cH7AfQ7kDvszk3FGnHmgh7wQzRVTeNvoWHmLNtqnL6rYMjPwXdHfp2TvNebZ3LTNXjChzCRBBk",
  "key8": "3fz3dLkJB5SN17Nxu1XeufDUZdN67Rz9Qyziw7L3TnRYVkffTGtd6VNgR5iTA1DAogjouF452ggdH9xGQ7C5S669",
  "key9": "2pgUkRA6MYZVZuu3xp48psjiZPZQo9nNn2xQ987Ktbxgrj4gGAo634C3PAf5KXyCwaH2Qwg6kBAUHQ9LTHz8EuqK",
  "key10": "55kqZBWdwUunaVPrvSxxPPTShAPXgKgfgKHHtCAvAvZjV99FHGSr34nRpJi7mJzACUUwT4QVtTwb8jGkqMqdCVy9",
  "key11": "51EtCarrSWd5cT1zjLuGRyNDPzVKo3Mbxa6k9Y3qyjYC5ZsTM7UnVBrvLRQTFEGScT7zKWnh8mmYkaqhkUGj6iFG",
  "key12": "5W1d8hwaKTaFTY5e479D5xwqwxtdZedt8TsWTpWoM6xmvYxn6dZXtb6o5drvMndqR8i1DGfEVjvTtSfdmCUnmPHV",
  "key13": "4914MSJMgsrzDZfodVmXj4AzAsLhARsFX3Hmd4jBd8BPsY5aggFthGw4fsMENbRqoLJfuRLPtSJhdbDcm1G4gBZZ",
  "key14": "4r52YvF5hhfZoWmJ27cxFe2SzmRtEM75LAKGSedwrDqhHRda7Zp4qZcG8bpvtS73qnJRL65Lk72FH5oUWRFG33TK",
  "key15": "2n1rxRYVPH3LVjwuBgBQt61EryfLxumWzh3aro9VCqS75rc9DVrdZ4v27RKvuxMx1kRFgN9PaDuqbM5TZvMwEZ7M",
  "key16": "E3xM9xBoqdQkbeCQcpemcGBujWHJsZ2xmBCW1nxFhZ8qpGmcTunZtJ1tvBtf9NiTR5JcAzDLD5sUaEds1aW5dcH",
  "key17": "4eBGnUhAZbUiHn7LpNxEAMFvui2UURsDJDPce85Eu9t8mZxaWsG7kjhb6MG1VwZBjegTg4f5FgMMWGHEJoyjtHFY",
  "key18": "vyVVVaPtzkJGupz1ko2J3wwhEPwPkjLudKvPQP3e7ca3FfsA6Re7D3JrcHgYorVmsJvd2L7p8mmujJjcZq3nVuN",
  "key19": "4nbY7D2yiAYGn2aCUDCSnFf8oNUjcQngGPoZo1V2Rrf2ffWPrxjkPjUbfvqxcZfwueNfR1p8edUtdkbik2Khzj7n",
  "key20": "36XQfRDmWhJnSQMv2TDe8FbzQquQKqfFrf32s9TgQrNL9eVWFz1eNRUc8m9SCdZGNbTDhf2wDKJoRLrrkitCchzx",
  "key21": "K9uFNHypTktjtJnPScDmGYigqptERHgB9RvLMxqT68p7WndHiKywa73ZQ9sQV1fcxVizPxLWFRQmHxURnKkmw1Z",
  "key22": "3SH3QsYwiK5dRzbZBerxFYDBErW5XqxdT9zTcUudy7CiyHETGg4qJYfsmK1Ey7nVP3kDk4USFqCFQSaSfTatbsF7",
  "key23": "3yxcLDD1j1hALui1DWAatymj7hSmxRQ7fMTYTQt3cTUd8LjPvDb1LQBayFGhtJCJXg7Lik3LmdGGzmXyQmJzDib1",
  "key24": "4y5jwnS56TmcsJAmcwGEAs5WKnw2LLjiw6onD7HAE1136oAi9uEsk4JekzFH2pWjjyn4HcmKmXHyGD28dLHkFF88",
  "key25": "U2dNGg5rC9Hk77J8eATZDHSBWUJ369Wt4exwD9XuHzfb12uufiLH7XajGE2JuTPR23V1Eqz8znVJN6SZ36BNV9g",
  "key26": "2LcVuMrneg3U4ErpHyx8wMJ7LXNXVp7zzW6tNMbAYs61HPP53EdubAVWbDoGFooLdYDvKnoed5XTofpetmpcBfiA",
  "key27": "441ziY9BPCZ79dc8qb1uE23nrDJZPoscRnWkTVnmkgWwJB95owsaiet3h7QPuoh5QRFMWaBviQq4sbTbt51eqg2q",
  "key28": "4Rw6M4hXmRoFfW96wtEENNfcrX9cCcd6XC2LoM3PWvpE4S2hLDasKs6rZpHbcBhKNiwYHeEQwTgYcQg2DnyDSwmo",
  "key29": "ouMmw8iBdrNE6Lfevknwwk93oT8A5Gx5c2sTCrPDUkRsxbaBef2uyqgGqMgUnqLBCVNJgX7zRmQzuUP9Nj1aT82",
  "key30": "5n7ZH32UJkRhXV3funigzL3Q8yEjpxhxDCZywofsaqy8nhKhePW5JCF1ynKp4C4sjZKYLEeBMRNhk3a3SyzLa1YA",
  "key31": "2dFrdMoAK2dsZdaMMayAaMfRHKxqq7sfWh5TnTjfPGcSGQNmWGm96quGhTLQKhZyvoribpF6rHu2jioyB4Hqbum2",
  "key32": "EchhSwVftn5VtAxnZ3WEFMdbcsWmdgjAWgSVMgNqDLYsRXTaC7hfU9gNB1W8wQFASmG9epaVJYLRJuzK6qS9ZTm",
  "key33": "5uL2oqXTFkSyESRQLzrQNqBkj26pKjVPU5rpnrJ8sbE9s1dCboWkkNKLhReXi9rdJZCtbCnf5oN92tGY8AxxgC4w",
  "key34": "4V7WZbpp5JT3GfhuRF54pPHDRka6PC9VdVEhJTUCY5id5y5oPxDJmKPyGiq12CQrEP815TeJDh8j5RCvNQonpKs1",
  "key35": "4uEGnETffcvmEPSdWKP2JK6kYadU4gJjmckrBeu6qo8rjJQNAXeBxRbd8Zgq8bH522nmTL7T3L8fAaBarfh15zu5"
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
