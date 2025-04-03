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
    "55UowpFUrqUf9Ehmo2dJXZRv9zUCMZb2VspMTq3242N6W871Uj4fu5Ed9czDhry1EcjEVWma8uw9wJE4KTjcKpbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j5kG9oQyToLycdZnockjWfcV7zKvAjoRv2EYMxBF2htZxBy8UUwt8Pe4HkCuuCV2NFGaMopFxn4EE3CDH2bfYgm",
  "key1": "2UCKG3KpPawWr2vUZm8ZQu23XKcLAPQpUirLFuxYbbA65538JFD1KU9ZUmXUvdmnmAKtVPRgCPShnSoCtQtrrDTa",
  "key2": "TLar1zHMnSdT1YVRkHCwncm8tt2iVSSRaEG1XwXuGURn5cs7x7R2nTrv6sCD2SFAdcdXLS8X4wsvosqx213GJpX",
  "key3": "2tB8L2D4Ugekoa6Rh1ss3vtt5VWSmKGMvuAYmfrx1buKXqqvdTWtPAFdGSeQ9Kkf6r62ZyfhJAtHfPaNAsL25XDS",
  "key4": "2hNLDL9vgyjTAjfJndRwKBJumq4n4vYm67vdcoaM3hQHC96p5Mws8kPbXsgR9Wbyc6boDagg6cdCcSPCHQC7G9i2",
  "key5": "4YZP2zYPzFA8RhgVDABrcNuQP9nY2rDzoyBQCrHXytFcFdCa7dm84dQZbJnapqTDWBFzqE54Z4yZB6kQsRfnFe6N",
  "key6": "42Xr6E8cKRWSQMXRjvrdDqYnG4bbY4FUrg3tDPD2JmGeAZxc9RHhin31o4gUfQV7KSwabQentnoLQmnJ6Xi8fb1Y",
  "key7": "4rTvjfkdPgmW5hfqSpZkvvZk299dyDAVoCuftmV9EuJDzwaTA2iQxToJHgQehGaT5ocsP9N2VCj2Q22rhW3FkcBy",
  "key8": "3E7Vq6dCCsi3s7zXNEJe9nrwXE9i4biohxv86FPgcSicATf75NNWnMwBNttcPrXqrdHuwpBhDrBdh1ywkxkHfThw",
  "key9": "4zoxWeyW6nvgPudr3zeB7YNjbmg7HScunuYKrTNRNHMS6MgcsoAxc3tE8FRzZm6e9YQ36YxkJx7GftkWh8NTktDG",
  "key10": "4ZGnxrwDQP4N9WvgHkWAonuzeQMWFf7hECirSHqdY2mf4GRDQ9RArd3tV5VYzKiKKwemHXnSnCVA5Amn56vSTTLS",
  "key11": "54xpTW56p4AQtxTnpw84X9LrjqZcB1UEd7vVBLPPW4eQeLebJ2iB3BCR5w7uuzm6Qyi7kJh1ZED8zqzTHJfp3sUM",
  "key12": "cayZwPNAxDvwUMbVHpUSHYCPG9piFFLnMyuKizeNwjUUez5KEV113z5FbU7EZ5WcoSLDbWvCmKuCeFo6LjcXDTL",
  "key13": "3Cj7iRk3N4iv64MsGR5uXb9nPvPoG8PBigjDDj47izYamZLxG5mgwxSKK12t8okB9iBqeExs6wfGsKvk1GR38YTh",
  "key14": "5ReHWFvrdrGbzQAsXh67j6SXzxZYAbqxapsK5BXGBYuEMqooFhyVW1ubnAzmsYmYbU6nPJWnReGQyQsxicwaMEdu",
  "key15": "4wdTqiUNDxqBsVWXrQNBZaVPWYa6YjNrEx9JWdtsNhVC4fXksGfY6t5W8fEJmhWVAFgLnkgJthCov26ics3cNkk9",
  "key16": "2ZkL7pvwnykfw6WnpQLQB94WyHeQVfprkQtsB5Za7YS8EZyXp7fwZW5G5TM4fDx1iwbZVTGF2mmyvYXRL2TwP36S",
  "key17": "pJ8qNxFeLZVNiKgH4gQh6J6JWNN4cv4EineDTAL45GTJXuzTDVmGQHHT7dGuMpT41NZu1EccCjjheKtMuQxo7Zc",
  "key18": "5NuLXLQY64Z9ySDnmHtrNJcJzkbZai1ce1EjGck5mgDP6bqiVKqvyCwM63egbnW4ZbDMPAt1nQpqMawvG3oB7Goy",
  "key19": "54BS1YhL4YRE6Bjd9tasTUZjX82y9fNpuzneQXxzgyZkbjQV34VvvnsVVzs26Wd1NdZJTHSjMKk4DdmJmwtK1cLV",
  "key20": "2etAgq7R6881ptYqrb4X2cicpHYz9Y4c3616mut4rjdYciie7ehjSgHnAZaJjKqoRR4PWBQTJNUcQTJVxjxDx3fm",
  "key21": "5Wco7N4owFgjV652Ahv8QAoiiwsovHim9ci4PzjYgiZv2uhPTzGBPNSJikR4yExKFeWWA3AG5rCtthhA72cGeX9Q",
  "key22": "53PAL6BpYB56QLFk4ixKRvgmKpa3pLLDbB4AfdjyEFUJjheow4S9yfyEQzrrtmWB9thZZbLU992bgL1ZpDi2dW6z",
  "key23": "2HS3rLaK27eK6QCWskjuW6UwzFeh4HwztEbczULjKzTQuV5steg6ApJLx5xqRq5xQ419NNG49KLJaT7A3YV2RSvA",
  "key24": "3fi9d2deyR3uavJ23EaVfLsMm2BYM91T3biQBWPNWhFqujKKFcQvJpnobWzUqHZ2iwV3Xd1K41STagMKZ1HqKFW7",
  "key25": "4G8oKVJ8T8xcJ6VZZpxRjFxra5rLihwb6qiBafa9b9VMazJc3BKKqjcryHx9uDQnZf3Z5t9EzQcCdP45zfDErtKV",
  "key26": "4mcu1dXihAr4YLQSHRSM4Dp5zLEKdApketrPBjDySo6iZYb8jJgMmPAVddo6KYpgPtP6N7YPK69cx1RrfC7enxio",
  "key27": "raBLhqCqXbTiy2gQd2Ba3WE6dRMAHrt7uSCquUZ1o6AQzrNaof9KYrDmXXH5Xh4Qcrd1g2RkmPbZ1EujRGLH5wh",
  "key28": "4ydfmcXoMKSHbFJAWfBjM4PaykQFX4tWXUiKZC18GJPeStmkJvfbhVELZDQFE2UiaNTts8TpfkSLZyqaMvndis5C",
  "key29": "Mv9xy1RnfpTQKS2aUBFNDyC24scwyGPvNNVcdyh7kSe72QhfuQWF2u56Kf6BDVNyr8iqRVVKAGZSaZDAiMv7coK",
  "key30": "528zMjxywmM85fanx4LwP7VEvHbanZNs1KafbSnNWoWUdfgraK427rRm1hFoApMatUYpVCRbXRaRPKWU15yG5B5J",
  "key31": "62KA58382hFgFeNx8MQduauBeXqq49rN9ofceoZ8qxiYNpJtjwDHKDJfdmjQMi1Pa4JX44CzyTkTAspkRpsMNgRX",
  "key32": "4Z3GdcuMk4Vz2hPdd2iJ28kMribj9mzSf65qBaNE9HTQ7CosK5kY4ruC3eNoDkLQpLwccgWWSXRG34dSU7dVMsDJ",
  "key33": "3vLdHTpCEYJGoovZHLRwhWRLGopHdH3zqeZ3svpyqkTxSHCTrtG48pxnNvTeRHdLgQKD3WGEMy4ykRNGMztrB5LR",
  "key34": "4ycxwkudYdT8tgxKXyybPqEDbW3QY4CNvT3W9B9im4iJXNW4vcFjT36rfFo8FstGfqbYLyhTF27C4UNcHScpRhqP",
  "key35": "3uGRzMG8JWs7RXLShMadRVeZ1kYh7MmNZGeEknv9biY9Ej3Aaq9yXQjy7QnqQfmboGoK4FT8MYkX7extB6TwprB1",
  "key36": "3CSaC9rFXMMAajWbaojLpy9zowSwHYFgGoo2mnCGGkjjYM3RzLjeBcpFYMikMupwcqbcgxsiqV4eyrhmAwwRfzEK",
  "key37": "3LiwrAmZzNJ7aADB7L77RQgiLb1MEHRqxVtaqwv64npveV45bzPzCVmcfuPXet5YiyPE75D2b6AKiTRdG9xviPcN",
  "key38": "3QEUmyci6wX5AiV6EtNT7HzRj6pnnFvGdMyad24TDM4tTzYi7MEpXMGSUrTGe3XXVN81tkRUoYSrkUBJvAee2mrs",
  "key39": "UaN9dvu39gBkiDgDst2ByFCxzgxzcYhQVTpGE7jqAag7jNpxTgbsAXAPjfFwYgouhQeszsGdjibSqzCZdhxPoep",
  "key40": "3YPmUApVX77y6PbCMWU7buuxXgMtFrdVrRB7cybt7yVbXrpEEigfpEeqErybJr63jcx6jug7xYq2gTyq6K53cLa5",
  "key41": "5pi7wBgsDMA8Sbn1ZcwyvjkoXM9XANwn4WxhfvtRhWYbUaVtrLBZqAGbVEPNV3NHp7i54q9b52nMW8DhGkeHEs4J",
  "key42": "3dZdQz422NqVFe882SWL2QVC4Kyckt9ZGwxG6GDQh61jWpp73GN5dZx8okwV8v9kBg3pi3Py2WarY2p152EtNVW1",
  "key43": "4S93P1ScGG7L6VvyLvQkYFSx2CZKCQuPdb1qaSw1BqZDtDaNt2nrKiZPmqo6py23qup7J4xZreGianAixa8eKfVt",
  "key44": "63srheQuTHB5p6wKP7kJuzn4dkKPWi19sjooDvavLmC6pRjL6VTZdedbjXwdbPWmhUVNYyy5ymnZhpghLb7aKbo6",
  "key45": "3wujLdnh7EkQnNkTi4ZRjyi19CMpySbvtvYPJbumUegCDor24Ph2eWujv8YN3Z98G4gqpT9GBcBHkDmuvkVpvvmg",
  "key46": "27y3FUNiwFrxEeaNU7R7qGzkYFkoec4X8fPLWfNF74ssVxaa9rhUYxNsFEnssN5ZR4MPGicyGDbimLnBah2er2nj",
  "key47": "B1tYHA82oj8WBCgEy9yzsrYswsrbMTxjgqiY5W4vP9Tit7FrNk1NGQNo8VgWmXTXu4Vez5xmpiue7sAeM8A5aRz",
  "key48": "fx7YKC83TaiJDn77sasKQQse8GV8TxpWe8YJTGABeqWQ5sKbSnHosmQDeXWJceCku84bp8JaM2fzdkajvpQRviv",
  "key49": "2HD2KbuYtNjjzQXsEew7vYT4xp6LPBfpVnJDSuXWt2tXbLzh2mM2XvDuW1sAFC6pYJKyVxUgiSuZB2BCZJekeEhC"
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
